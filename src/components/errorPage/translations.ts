import { StatusCodes } from './statusCodes';
import { Language } from '../../types/language';

export const translations: Record<
  Language,
  Record<
    StatusCodes,
    { title: string; description: string; buttonLabel: string }
  >
> = {
  de: {
    404: {
      title: 'Die Seite konnte nicht gefunden werden',
      description:
        'Hast du den Link kopiert oder abgetippt? Dann überprüfe den Link und lade die Seite neu.',
      buttonLabel: 'Zur Startseite',
    },
    500: {
      title: 'Tut uns leid, da ist was schief gegangen',
      description:
        'Unser Team arbeitet schon an der Lösung des Problems. Leere den Browserverlauf und lade die Seite neu oder gehe zur Startseite.',
      buttonLabel: 'Zur Startseite',
    },
  },
  fr: {
    404: {
      title: 'Désolé, cette page n’a pas pu être trouvée',
      description:
        'Avez-vous tapé ou copié le lien? Si oui, nous vous suggérons de vérifier votre saisie et de recharger la page.',
      buttonLabel: 'Vers la page d’accueil',
    },
    500: {
      title: 'Désolé, quelque chose a mal tourné',
      description:
        'Notre équipe est déjà en train de chercher une solution au problème. Effacez l’historique de navigation/du navigateur et rechargez la page ou allez à la page d’accueil.',
      buttonLabel: 'Vers la page d’accueil',
    },
  },
  it: {
    404: {
      title: 'Spiacenti, non è possibile trovare questa pagina',
      description:
        'Se hai digitato il link o l’hai copiato, ti consigliamo di verificare quanto inserito e di ricaricare la pagina.',
      buttonLabel: 'Alla pagina iniziale',
    },
    500: {
      title: 'Spiacenti, qualcosa è andato storto',
      description:
        'La nostra squadra sta già lavorando a una soluzione. Puoi però provare a svuotare la cronologia di navigazione e ricaricare la pagina oppure andare alla pagina iniziale.',
      buttonLabel: 'Alla pagina iniziale',
    },
  },
  en: {
    404: {
      title: 'Sorry, we can’t find that page',
      description:
        'The page you are trying to reach might no longer exist. If you typed in or copied the link, you could try doing it again.',
      buttonLabel: 'Go to home',
    },
    500: {
      title: 'Sorry, something went wrong',
      description:
        'We have found a problem and have reported it to our team to fix it. In the meantime, here are a few things that you can try:',
      buttonLabel: 'Go to home',
    },
  },
};
