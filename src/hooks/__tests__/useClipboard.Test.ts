import { act, renderHook } from '@/jest-utils';

import useClipboard from '../useClipboard';

type ClipboardMock = {
  writeText?: jest.Mock<Promise<void>, [string]>;
};

const setClipboard = (clipboard?: ClipboardMock) => {
  Object.defineProperty(window.navigator, 'clipboard', {
    configurable: true,
    value: clipboard,
  });
};

const setExecCommand = (successful: boolean) => {
  const execCommand = jest.fn(() => successful);

  Object.defineProperty(document, 'execCommand', {
    configurable: true,
    value: execCommand,
  });

  return execCommand;
};

describe('useClipboard', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
    setClipboard();
  });

  afterEach(() => {
    Reflect.deleteProperty(document, 'execCommand');
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it('should copy text using the Clipboard API and reset hasCopied after the timeout', async () => {
    const writeText = jest.fn<Promise<void>, [string]>().mockResolvedValue();
    setClipboard({ writeText });

    const { result } = renderHook(() =>
      useClipboard('Copied value', { timeout: 500 }),
    );

    let copied = false;

    await act(async () => {
      copied = await result.current.onCopy();
    });

    expect(copied).toBe(true);
    expect(writeText).toHaveBeenCalledWith('Copied value');
    expect(result.current.hasCopied).toBe(true);

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current.hasCopied).toBe(false);
  });

  it('should fall back to execCommand when the Clipboard API is not available', async () => {
    const execCommand = setExecCommand(true);

    const { result } = renderHook(() => useClipboard('Fallback value'));

    let copied = false;

    await act(async () => {
      copied = await result.current.onCopy();
    });

    expect(copied).toBe(true);
    expect(execCommand).toHaveBeenCalledWith('copy');
    expect(result.current.hasCopied).toBe(true);
  });

  it('should fall back to execCommand when the Clipboard API rejects', async () => {
    const writeText = jest
      .fn<Promise<void>, [string]>()
      .mockRejectedValue(new Error('Clipboard unavailable'));
    const execCommand = setExecCommand(true);
    setClipboard({ writeText });

    const { result } = renderHook(() => useClipboard('Rejected value'));

    let copied = false;

    await act(async () => {
      copied = await result.current.onCopy();
    });

    expect(copied).toBe(true);
    expect(writeText).toHaveBeenCalledWith('Rejected value');
    expect(execCommand).toHaveBeenCalledWith('copy');
    expect(result.current.hasCopied).toBe(true);
  });

  it('should return false and keep hasCopied false when copying fails', async () => {
    setExecCommand(false);

    const { result } = renderHook(() => useClipboard('Failed value'));

    let copied = true;

    await act(async () => {
      copied = await result.current.onCopy();
    });

    expect(copied).toBe(false);
    expect(result.current.hasCopied).toBe(false);
  });
});
