export interface IEvent {
      id: number,
      title: string,
      description: string,
      date: string,
      time: string,
      price: number,
      imageUrl: string,
      location: {
        address: string,
        city: string,
        country: string
      },
      sessions: ISession[]
}

export interface ISession {
    id: number,
    name: string,
    presenter: string,
    duration: number,
    level: string,
    abstract: string,
    voters: string[]
}