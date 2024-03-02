import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface moovie{
  title:string,
  ganre:string,
  rating: number,
  description:string
}

@Component({
  selector: 'app-my-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-comp.component.html',
  styleUrl: './my-comp.component.css'
})
export class MyCompComponent {
  H1title:string="LR3";
  isVisible:boolean=false;
  isHovered:boolean = false;
  currentDate:string = Date();
  selectedGanre:string = '';
  movieGanres:string[]=[
    'Western',
    'Horror',
    'Adventures',
    'Comedy',
    'Historical'
  ];
  movies:moovie[]=[
    {
      title:'The Good the Bad and the Ugly',
      ganre:'Western',
      rating: 8.8,
      description: 'stringThe Good, the Bad and the Ugly is a 1966 Italian epic spaghetti Western film directed by Sergio Leone and starring Clint Eastwood as "the Good", Lee Van Cleef as "the Bad", and Eli Wallach as "the Ugly". Its screenplay was written by Age & Scarpelli, Luciano Vincenzoni, and Leone, based on a story by Vincenzoni and '
      
    },
    {
      title:'The Ring',
      ganre:'Horror',
      rating: 7.1,
      description:'The Ring is a 2002 American psychological supernatural horror film directed by Gore Verbinski and written by Ehren Kruger, and stars Naomi Watts, Martin Henderson, David Dorfman, Jane Alexander and Brian Cox. It is a remake of Hideo Nakata\'s 1998 film Ring, based on the 1991 novel by Koji Suzuki. Watts plays Rachel Keller, a journalist who discovers a cursed videotape that kills the viewer seven days after viewing it.'
    },
    {
      title:'Indiana Jones and the Dial of Destiny',
      ganre: 'Adventures',
      rating: 6.6,
      description:'Indiana Jones and the Dial of Destiny is a 2023 American action adventure film directed by James Mangold, who co-wrote it with David Koepp and the writing team of Jez and John-Henry Butterworth. It is the fifth and final installment in the Indiana Jones film series and the sequel to Indiana Jones and the Kingdom of the Crystal Skull.'
    },
    {
      title:'Superbad',
      ganre: 'Comedy',
      rating: 7.6,
      description:'Superbad is a 2007 American coming-of-age teen buddy comedy film directed by Greg Mottola, written by Seth Rogen and Evan Goldberg, and produced by Judd Apatow. It stars Jonah Hill and Michael Cera as Seth and Evan, two teenagers about to graduate from high school. Before graduating, the boys want to party and lose their virginity, but their plan proves harder than expected.'
    },
    {
      title: 'Amadeus',
      ganre:'Historical',
      rating:8.4,
      description:'Amadeus is a 1984 American period biographical drama film directed by Miloš Forman and adapted by Peter Shaffer from his 1979 stage play of the same name. Set in Vienna, Austria, during the latter half of the 18th century, the film is a fictionalized story of Wolfgang Amadeus Mozart from the time he left Salzburg, described by its writer as a "fantasia on the theme of Mozart and Salieri".'
    },
    {
      title: 'Unforgiven',
      ganre: 'Western',
      rating: 8.2,
      description: 'Unforgiven is a 1992 American revisionist Western film produced and directed by Clint Eastwood and written by David Webb Peoples. The film portrays William Munny, an aging outlaw and killer who takes on one more job, years after he had turned to farming.'
    },
    {
      title: 'Django Unchained',
      ganre: 'Western',
      rating: 8.4,
      description: 'Django Unchained is a 2012 American revisionist Western film written and directed by Quentin Tarantino, starring Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington, and Samuel L. Jackson, with Walton Goggins, Dennis Christopher, James Remar, and Don Johnson in supporting roles.'
    },
    {
      title: 'The Magnificent Seven',
      ganre: 'Western',
      rating: 7.7,
      description: 'The Magnificent Seven is a 1960 American Western film directed by John Sturges and starring Yul Brynner, Eli Wallach, Steve McQueen, Charles Bronson, Robert Vaughn, Brad Dexter, James Coburn, and Horst Buchholz.'
    },
    {
      title: 'The Exorcist',
      ganre: 'Horror',
      rating: 8.0,
      description: 'The Exorcist is a 1973 American supernatural horror film directed by William Friedkin and produced and written for the screen by William Peter Blatty, based on the 1971 novel of the same name by Blatty. The film stars Ellen Burstyn, Max von Sydow, Lee J. Cobb, Kitty Winn, Jack MacGowran, Jason Miller, and Linda Blair.'
    },
    {
      title: 'A Nightmare on Elm Street',
      ganre: 'Horror',
      rating: 7.5,
      description: 'A Nightmare on Elm Street is a 1984 American supernatural slasher film written and directed by Wes Craven, and produced by Robert Shaye. It is the first installment in the A Nightmare on Elm Street film series and stars Heather Langenkamp, John Saxon, Ronee Blakley, Robert Englund as Freddy Krueger, and Johnny Depp in his film debut.'
    },
    {
      title: 'The Shining',
      ganre: 'Horror',
      rating: 8.4,
      description: 'The Shining is a 1980 psychological horror film produced and directed by Stanley Kubrick and co-written with novelist Diane Johnson. The film is based on Stephen King\'s 1977 novel of the same name and stars Jack Nicholson, Shelley Duvall, Scatman Crothers, and Danny Lloyd.'
    },
    {
      title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
      ganre: 'Adventures',
      rating: 8.0,
      description: 'Pirates of the Caribbean: The Curse of the Black Pearl is a 2003 American fantasy swashbuckler film directed by Gore Verbinski and the first film in the Pirates of the Caribbean film series.'
    },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      ganre: 'Adventures',
      rating: 8.8,
      description: 'The Lord of the Rings: The Fellowship of the Ring is a 2001 epic fantasy adventure film directed by Peter Jackson, based on the 1954 novel The Fellowship of the Ring, the first volume of J. R. R. Tolkien\'s The Lord of the Rings. The film is the first installment in The Lord of the Rings trilogy and was produced by Barrie M. Osborne, Jackson, Fran Walsh, and Tim Sanders, and written by Walsh, Philippa Boyens, and Jackson.'
    },
    {
      title: 'Raiders of the Lost Ark',
      ganre: 'Adventures',
      rating: 8.4,
      description: 'Raiders of the Lost Ark (later marketed as Indiana Jones and the Raiders of the Lost Ark) is a 1981 American action-adventure film directed by Steven Spielberg and written by Lawrence Kasdan, based on a story by George Lucas and Philip Kaufman.'
    },
    {
      title: 'The Hangover',
      ganre: 'Comedy',
      rating: 7.7,
      description: 'The Hangover is a 2009 American comedy film directed by Todd Phillips, co-produced with Daniel Goldberg, and written by Jon Lucas and Scott Moore. It is the first installment in The Hangover trilogy. The film stars Bradley Cooper, Ed Helms, Zach Galifianakis, Heather Graham, Justin Bartha, and Jeffrey Tambor.'
    },
    {
      title: 'Bridesmaids',
      ganre: 'Comedy',
      rating: 6.8,
      description: 'Bridesmaids is a 2011 American comedy film directed by Paul Feig, written by Annie Mumolo and Kristen Wiig, and produced by Judd Apatow, Barry Mendel, and Clayton Townsend. The plot centers on Annie (Wiig), who suffers a series of misfortunes after being asked to serve as maid of honor for her best friend, Lillian, played by Maya Rudolph.'
    },
    {
      title: 'Step Brothers',
      ganre: 'Comedy',
      rating: 6.9,
      description: 'Step Brothers is a 2008 American comedy film directed by Adam McKay and written by Will Ferrell and McKay from a story by Ferrell, McKay, and John C. Reilly. It follows Brennan (Ferrell) and Dale (Reilly), two grown men who are forced to live together as brothers after their single parents, with whom they still live, marry each other.'
    },
    {
      title: 'Gladiator',
      ganre: 'Historical',
      rating: 8.5,
      description: 'Gladiator is a 2000 epic historical drama film directed by Ridley Scott and written by David Franzoni, John Logan, and William Nicholson. The film was co-produced and released by DreamWorks Pictures and Universal Pictures. It stars Russell Crowe, Joaquin Phoenix, Connie Nielsen, Ralf Möller, Oliver Reed (in his final role), Djimon Hounsou, Derek Jacobi, John Shrapnel, and Richard Harris.'
    },
    {
      title: 'Braveheart',
      ganre: 'Historical',
      rating: 8.3,
      description: 'Braveheart is a 1995 American epic historical fiction war film directed and produced by Mel Gibson. Gibson portrays William Wallace, a 13th-century Scottish warrior who led the Scots in the First War of Scottish Independence against King Edward I of England. The film also stars Sophie Marceau, Patrick McGoohan, Catherine McCormack, Brendan Gleeson, Angus Macfadyen, and David O\'Hara.'
    },
    {
      title: 'Lawrence of Arabia',
      ganre: 'Historical',
      rating: 8.3,
      description: 'Lawrence of Arabia is a 1962 British epic historical drama film based on the life of T. E. Lawrence. It was directed by David Lean and produced by Sam Spiegel through his British company Horizon Pictures, with the screenplay by Robert Bolt and Michael Wilson.'
    },
    {
      title: 'Wild Wild West',
      ganre: 'Western',
      rating: 4.9,
      description: 'Wild Wild West is a 1999 American steampunk western action-comedy film directed by Barry Sonnenfeld and written by S. S. Wilson and Brent Maddock alongside Jeffrey Price and Peter S. Seaman, from a story by Jim Thomas and John Thomas.'
    },
    {
      title: 'The Happening',
      ganre: 'Horror',
      rating: 5.0,
      description: 'The Happening is a 2008 psychological thriller film written, co-produced, and directed by M. Night Shyamalan and starring Mark Wahlberg, Zooey Deschanel, John Leguizamo, and Betty Buckley.'
    },
    {
      title: 'Anaconda',
      ganre: 'Horror',
      rating: 4.8,
      description: 'Anaconda is a 1997 adventure horror film directed by Luis Llosa and starring Jennifer Lopez, Ice Cube, Jon Voight, Eric Stoltz, Jonathan Hyde, and Owen Wilson. It focuses on a documentary film crew in the Amazon rainforest that is captured by a snake hunter who is hunting down a giant, legendary green anaconda.'
    },
    {
      title: 'Green Lantern',
      ganre: 'Adventures',
      rating: 5.5,
      description: 'Green Lantern is a 2011 American superhero film based on the DC Comics character of the same name. The film stars Ryan Reynolds, Blake Lively, Peter Sarsgaard, Mark Strong, Angela Bassett, and Tim Robbins, with Martin Campbell directing a script by Greg Berlanti and comic book writers Michael Green and Marc Guggenheim, which was subsequently rewritten by Michael Goldenberg.'
    },
    {
      title: 'Epic Movie',
      ganre: 'Comedy',
      rating: 2.3,
      description: 'Epic Movie is a 2007 American parody film directed and written by Jason Friedberg and Aaron Seltzer and produced by Paul Schiff. It stars Kal Penn, Adam Campbell, Jayma Mays, and Faune A'
    }
  
  
    
  ];
  
  chooseGanre (chosenItem:string)
  {
    this.selectedGanre = chosenItem; 
  }

  
}
