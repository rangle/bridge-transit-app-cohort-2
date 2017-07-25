const DEFAULT_STATE = {
  items: [
    {id: 1, name: 'Technology', name_localized: 'technology', short_name: 'tech', subcategories: [{name: 'women in tech', parent_category: 'techology'}], image: 'http://loremflickr.com/200/200/technology'},
    {id: 2, name: 'Board games', name_localized: 'board games', short_name: 'games', subcategories: [{name: 'caverna', parent_category: 'board games'}], image: 'http://loremflickr.com/200/200/boardgames'},
    {id: 3, name: 'Books', name_localized: 'books', short_name: 'books', subcategories: [{name: 'book clubs', parent_category: 'books'}, {name: 'author readings', parent_category: 'books'}], image: 'http://loremflickr.com/200/200/books'},
    {id: 4, name: 'Biking', name_localized: 'biking', short_name: 'bike', subcategories: [{name: 'races', parent_category: 'biking'}, {name: 'group rides', parent_category: 'biking'}], image: 'http://loremflickr.com/200/200/bike'},
    {id: 5, name: 'Music', name_localized: 'music', short_name: 'music', subcategories: [{name: 'concerts', parent_category: 'music'}], image: 'http://loremflickr.com/200/200/music'},
    {id: 6, name: 'Art', name_localized: 'art', short_name: 'art', subcategories: [{name: 'galleries', parent_category: 'art'}], image: 'http://loremflickr.com/200/200/art'},
  ],
};

export default (state = DEFAULT_STATE, action) => {
 switch(action.type) {

    default:
      return state;
  }
}