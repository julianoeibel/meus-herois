export interface Heroi {
    id: string,
    name: string,
    image: { 
        url: string },
    powerstats: {
        id: string,
        name: string,
        intelligence: string,
        strength: string,
        speed: string,
        durability: string,
        power: string,
        combat: string
    },
    appearance: {
        gender: string,
        race: string,
        height: [
          string,
          string
        ],
        weight: [
          string,
          string
        ],
        'eye-color': string,
        'hair-color': string
      }
      biography: {
        'full-name': string,
        'alter-egos': string,
        aliases: [
          string
        ],
        'place-of-birth': string,
        'first-appearance': string,
        publisher: string,
        alignment: string
      }
      connections: {
        'group-affiliation': string,
        relatives: string
      }
      work: {
        base: string,
        occupation: string
      }
   }