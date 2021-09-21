exports.seed = function (knex) {
  return knex('plants').insert([

      {
          nick_name: "lily1",
          species: "flower",
          image: "https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg",
          h2o_frequency: "4",
          user_id: 1
      },

      {
        nick_name: "lily",
        species: "flower",
        image: "https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg",
        h2o_frequency: "3",
        user_id: 3
    },
    {
      nick_name: "lily3",
      species: "flower",
      image: "https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/6/25/0/CI_04-fbfd01d70004.jpg.rend.hgtvcom.966.725.suffix/1452664590074.jpeg",
      h2o_frequency: "4",
      user_id: 2
  },


  ])
};