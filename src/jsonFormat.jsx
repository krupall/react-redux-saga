JG.repeat(50, {
    id: JG.objectId(),
    category:JG.random('Silver','Gold'),
    sold: false,
    initialValue:1000,
    team:'',
    email() {
      return (
        _.snakeCase(this.profile.name) +
        '@gmail.com'
      ).toLowerCase();
    },
    username() {
      return (_.words(this.profile.name)[0] + moment(this.profile.dob).format('YY')).toLowerCase();
    },
    profile: {
      name: `${JG.firstName()} ${JG.lastName()}`,
      dob: moment(JG.date(new Date(1988, 0, 1), new Date(1995, 0, 1))).format('DD-MM-YYYY'),
      address: `${JG.integer(1, 100)} ${JG.street()}, ${JG.city()}, Goa`,
      about: JG.loremIpsum({ units: 'sentences', count:JG.random(1,2,3,4) }),
    },
    picture: `https://randomuser.me/api/portraits/men/${JG.integer(1, 100)}.jpg`,
    roles: _.uniq(JG.repeat(1, JG.random('RightHand Batsman', 'Left hand Batsman', 'RightHand Bowler', 'Wicket Keeper', 'Left hand Bowler')))
  });
  