import { heroes } from "../data/heroes";


export const getHeroesByPublisher = (publisher) => {
    const valiedPublishers = ['DC Comics', 'Marvel Comics'];
    if (!valiedPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not a valied publisher`)
    }

    return heroes.filter( hero => hero.publisher === publisher);
}