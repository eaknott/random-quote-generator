const colors = [
    '#818E7B',
    '#E4CA60',
    '#D28540',
    '#854B50',
    '#DDC7A0',
    '#d9ae94',
    '#e8ac65',
    '#9b9b7a',
    '#e26d5c',
    '#723d46',
    '#d4586f',
    '#c5453d',
    '#692d28',
    '#ff7096',
    '#fbb1bd',
    '#ff9e00',
    '#b08968',
    '#ddb892',
    '#b27092',
    '#efc88b'
];
  
const quotes = [
    "One can have no smaller or greater mastery than mastery of oneself.",
    "Do not think that what is hard for you to master is humanly impossible; and if it is humanly possible, consider it to be within your reach.",
    "One repays a teacher badly if one remains only a pupil.",
    "The intuitive mind is a sacred gift and the rational mind is a faithful servant. We have created a society that honors the servant and forgotten the gift.",
    "The only thing of real importance that leaders do is create and manage culture. If you don't manage culture, it manages you.",
    "Be wary of great leaders. Hope that there are many, many small leaders.",
    "The art and science of asking questions is the source of all knowledge.",
    "Example is not the main thing influencing others; it is the only thing.",
    "Diversity drives innovation. When we limit who can contribute, we limit what problems we can solve.",
    "Good leadership requires you to surround yourself with people of diverse perspectives who can disagree with you without fear of retaliation.",
    "The beginning is the most important part of the work.",
    "The beginning is always today.",
    "Results? Why, I have gotten lots of results! I know several thousand things that won't work.",
    "Do not ask whether a statement is true until you know what it means.",
    "Memory is the residue of thought.",
    "Everybody has a plan until they get punched in the mouth.",
    "It pays better to wait and recollect by an effort from within, than to look at the book again.",
    "Take care of the bars and the piece will take care of itself.",
    "He who can go to the fountain does not go to the water jar.",
    "If I have seen further it is by standing on the shoulders of giants.",
    "Keep your actions positive, because your actions become your habits. Keep your habits positive, because your habits become your values. Keep your values positive, because your values become your destiny.",
    "Until he extends the circle of his compassion to all living things, man will not himself find peace.",
    "If I do not have peace myself, how can I help others find it?",
    "There is no charm equal to tenderness of heart.",
    "Anyone can see that intending and not acting when we can is not really intending, and loving and not doing good when we can is not really loving.",
    "I learned that courage was not the absence of fear, but the triumph over it.",
    "The deepest wisdom lies in observing our own mind.",
    "What wisdom can you find that is greater than kindness?",
    "Believe you can and you're halfway there.",
    "Learn the rules like a pro, so you can break them like an artist.",
    "Do one thing every day that scares you.",
    "Don't count the days, make the days count.",
    "I didn't get there by wishing for it or hoping for it, but by working for it.",
    "Earn your leadership every day.",
    "Alone we can do so little; together we can do so much.",
    "It is amazing what you can accomplish if you do not care who gets the credit.",
    "Try to be a rainbow in someone's cloud.",
    "Strive not to be a success, but rather to be of value.",
    "I would rather die of passion than of boredom.",
    "Nothing lasts forever. Not even your troubles.",
    "Those who dare to fail miserably can achieve greatly.",
    "Go until you fail, then keep going.",
    "A person who never made a mistake never tried anything new.",
    "If you obey all the rules, you miss all the fun.",
    "Tough times never last, but tough people do.",
    "Be so good they can't ignore you.",
    "Everything you've ever wanted is on the other side of fear.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
    "If you don't like something, change it. If you can't change it, change your attitude.",
    "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    "Twenty years from now you will be more disappointed by the things you didn't do than by the things you did.",
    "The greatest danger for most of us is not that our aim is too high and we miss it but that it is too low and we reach it.",
    "Life isn't about finding yourself. Life is about creating yourself.",
    "It's not the load that breaks you, it's the way you carry it.",
    "If there is a book that you want to read, but it hasn't been written yet, you must be the one to write it.",
    "Pain is inevitable. Suffering is optional.",
    "There is nothing noble in being superior to your fellow men. True nobility lies in being superior to your former self.",
    "Love the life you live. Live the life you love.",
    "You must do the things you think you cannot do."
];
  
const authors = [
    "- Leonardo da Vinci",
    "- Marcus Aurelius",
    "- Friedrich Nietzsche",
    "- Albert Einstein",
    "- Edgar Schein",
    "- Pete Seeger",
    "- Thomas Berger",
    "- Albert Schweitzer",
    "- Telle Whitney",
    "- Doris Kearns Goodwin",
    "- Plato",
    "- Mary Shelley",
    "- Thomas Edison",
    "- Errett Bishop",
    "- Daniel Willingham",
    "- Mike Tyson",
    "- William James",
    "- Philip Johnston",
    "- Leonardo da Vinci",
    "- Isaac Newton",
    "- Mahatma Gandhi",
    "- Albert Schweitzer",
    "- Tsongkhapa",
    "- Jane Austen",
    "- Emanuel Swedenborg",
    "- Nelson Mandela",
    "- Gönpawa",
    "- Jean-Jacques Rousseau",
    "- Theodore Roosevelt",
    "- Pablo Picasso",
    "- Eleanor Roosevelt",
    "- Muhammad Ali",
    "- Estée Lauder",
    "- Michael Jordan",
    "- Helen Keller",
    "- Harry Truman",
    "- Maya Angelou",
    "- Albert Einstein",
    "- Vincent van Gogh",
    "- Arnold H. Glasgow",
    "- John F. Kennedy",
    "- Jason Feifer",
    "- Albert Einstein",
    "- Katherine Hepburn",
    "- Robert H. Shuller",
    "- Steven Martin",
    "- George Addair",
    "- C.S. Lewis",
    "- Paulo Coelho",
    "- Maya Angelou",
    "- Jane Goodall",
    "- Mark Twain",
    "- Michelangelo",
    "- George Bernard Shaw",
    "- Lena Horne",
    "- Toni Morrison",
    "- Haruki Murakami",
    "- Ernest Hemingway",
    "- Bob Marley",
    "- Eleanor Roosevelt"
];

function changeColor() {
  let color = Math.floor(Math.random() * colors.length);

  $('html').animate({backgroundColor: colors[color]},800);
  $('body').animate({backgroundColor: colors[color]},800);
  $('.button').animate({backgroundColor: colors[color]},800);
  $('.fa-quote-left').animate({color: colors[color]},800);
  $('#text').animate({color: colors[color]},800);
  $('#author').animate({color: colors[color]},300);
}

function getRandomQuote() {
  let tracker = Math.floor(Math.random() * quotes.length);
  
  $('#quote-text').animate({opacity: 0}, 800, function() {
    $(this).animate({opacity: 1}, 800);
    $('#text').text(quotes[tracker]);
  });
  $('#author').animate({opacity: 0}, 800, function() {
    $(this).animate({opacity: 1}, 300);
    $(this).text(authors[tracker]);
  });

  changeColor();

  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=inspirationalquotes&related=freecodecamp&text=' +
    encodeURIComponent('"' + quotes[tracker] + '"' + authors[tracker])
  );
}

$(document).ready(function() {
  $('#new-quote').on('click', getRandomQuote);
});