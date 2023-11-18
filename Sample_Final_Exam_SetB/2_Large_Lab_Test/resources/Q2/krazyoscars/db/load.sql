drop database if exists oscars;

create database oscars;

use oscars;

CREATE TABLE if not exists `winner` (
  `id` integer NOT NULL,
  `image` varchar(256) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `name` varchar(256) NOT NULL,
  `year` integer NOT NULL,
  `title` varchar(256) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

insert into winner values (1,'emil_jannings.jpg', 'M', "Emil Jannings", 1928, "The Last Command", "At the first Oscar ceremony, Jannings won two performances. In 'The Last Command,' Jannings plays a former Russian general who ends up as a Hollywood extra. And in 'The Way of All Flesh,' he takes on the role of a bank clerk who is separated from his family for over two decades.");

insert into winner values (2,'warner_baxter.jpg', 'M', "Warner Baxter", 1929, "In Old Arizona", "Baxter won his Oscar for playing The Cisco Kid in the first Hollywood western made with sound.");

insert into winner values (3,'lionel_barrymore.jpg', 'M', "Lionel Barrymore", 1931, "A Free Soul", "The patriarch of the famed acting dynasty won his performance as a defense attorney who must defend his daughter's ex-boyfriend who is accused of murdering a mobster.");

insert into winner values (4,'charles_laughton.jpg', 'M', "Charles Laughton", 1933, "The Private Life of Henry VII", "Laughton won for his performance as the zaftig British monarch who goes through multiple wives.");

insert into winner values (5,'clark_gable.jpg', 'M', "Clark Gable", 1934, "It Happened One Night", "Gable won his Oscar for playing a rougish reporter who falls in love with a spoiled socialite. The film is one of three films to win Oscars for Picture, Director, Actor, Actress and Screenplay.");

insert into winner values (6,'spencer_tracy.jpg', 'M', "Spencer Tracy", 1938, "Boys Town", "Tracy won his second consecutive Oscar in this category for his role as Father Flanagan, a good-hearted priest who works to help a group of orphans.");

insert into winner values (7,'james_stewart.jpg', 'M', "James Stewart", 1940, "The Philadelphia Story", "Stewart plays Mike Connor, a tabloid journalist who romances a wealthy socialite. The win was seen by many as a consolation prize for Stewart losing the previous year for 'Mr. Smith Goes to Washington.' Stewart himself believed that his Oscar should have gone to Henry Fonda for 'The Grapes of Wrath.'");

insert into winner values (8,'bing_crosby.jpg', 'M', "Bing Crosby", 1944, "Going My Way", "The legendary crooner won his Oscar for his role as an uncoventional priest in this Best Picture champ.");

insert into winner values (9,'humphrey_bogart.jpg', 'M', "Humphrey Bogart", 1951, "The African Queen", "'Bogie' won his only Oscar for his role as the captain of a small riverboat who teams up with a missionary (Katherine Hepburn) to attack a German gunboat during World War I.");

insert into winner values (10,'marlon_brando.jpg', 'M', "Marlon Brando", 1954, "On The Waterfront", "Brando's first Oscar was for his role as a former prizefighter working on the docks who stands up to corrupt union bosses in this Oscar-winning Best Picture.");

insert into winner values (11,'charlton_heston.jpg', 'M', "Charlton Heston", 1959, "Ben-Hur", "Heston's win for playing the title role of a prince sold into slavery was one of 11 Oscar wins for the epic drama.");

insert into winner values (12,'gregory_peck.jpg', 'M', "Gregory Peck", 1962, "To Kill a Mockingbird", "Peck's Oscar was for his performance as virtuous lawyer and loving father, Atticus Finch, in this adaptation of Harper Lee's classic novel.");

insert into winner values (13,'john_wayne.jpg', 'M', "John Wayne", 1969, "True Grit", "The Duke won his Oscar playing Rooster Cogburn, an aging U.S. Marshal hired by a young girl to bring in her father's killer. The film was remade in 2010 by the Coen Brothers with Jeff Bridges earning an Oscar nomination for playing Cogburn.");

insert into winner values (14,'george_c_scott.jpg', 'M', "George C. Scott", 1970, "Patton", "Scott refused to accept his Oscar for playing the larger-than-life World War II general, claiming that the Oscars were an unseemly affair and calling the entire ceremony a 'goddamn meat parade.'");

insert into winner values (15,'jack_nicholson.jpg', 'M', "Jack Nicholson", 1975, "One Flew Over the Cuckoo's Nest", "After several nominations in this category, Nicholson won playing the rebellious Randle Patrick McMurphy in this adaptation of Ken Kesey's classic novel. The film is one of only three to win Oscars for Picture, Actor, Actress, Director and Screenplay.");

insert into winner values (16,'dustin_hoffman.jpg', 'M', "Dustin Hoffman", 1979, "Kramer vs. Kramer", "Hoffman won his first Oscar as a divorced father fighting for custody of his young son in this drama which also won Oscars for Picture, Director, Screenplay and Supporting Actress (Meryl Streep).");

insert into winner values (17,'robert_de_niro.jpg', 'M', "Robert De Niro", 1980, "Raging Bull", "Six years after winning Best Supporting Actor, De Niro triumphed in this category for his performance as boxer Jake LaMotta in Martin Scorsese's classic film. De Niro famously gained sixty pounds to play LaMotta in his later years.");

insert into winner values (18,'robert_duvall.jpg', 'M', "Robert Duvall", 1983, "Tender Mercies", "After three previous nominations, Duvall won for playing an alcoholic Country singer looking to find a second chance at life when he meets a young widow and her son.");

insert into winner values (19,'paul_newman.jpg', 'M', "Paul Newman", 1986, "The Color of Money", "A year after earning an Honorary Oscar for Lifetime Achievement, Newman won his first acting Oscar for reprising his role as pool hustler Fast Eddie Felson in Martin Scorsese's follow-up to 1961's 'The Hustler.'");

insert into winner values (20,'tom_hanks.jpg', 'M', "Tom Hanks", 1993, "Philadelphia", "Hanks won his first of two consecutive Best Actor Oscars for playing a gay lawyer suffering from AIDS who sues his employers for wrongful termination.");



insert into winner values (21,'norma_shearer.jpg', 'F', "Norma Shearer", 1930, "The Divorcee", "Shearer plays a troubled woman involved in a series of messy relationships. The film was produced by Shearer's husband, Irving Thalberg, who thought his wife lacked the sex appeal to play the lead role. But Shearer commissioned a private photo shoot which ultimately convinced Thalberg to give her the role. Shearer received two nominations in this category, but was given the Oscar for this performance.");

insert into winner values (22,'vivien_leigh.jpg', 'F', "Vivien Leigh", 1939, "Gone with the Wind", "Leigh won her fist Oscar for playing Scarlett O'Hara in this adaptation of the classic novel, an adaptation that won 10 Oscars including Best Picture.");

insert into winner values (23,'joan_fontaine.jpg', 'F', "Joan Fontaine", 1941, "Suspicion", "Fonatine plays a spinster who becomes the target of a con man in this romantic thriller directed by Alfred Hitchcock.");

insert into winner values (24,'ingrid_bergman.jpg', 'F', "Ingrid Bergman", 1944, "Gaslight", "Bergman's first Oscar was for her role as a wife who is manipulated into insanity by her cruel husband.");

insert into winner values (25,'audrey_hepburn.jpg', 'F', "Audrey Hepburn", 1953, "Roman Holiday", "Hepburn won her Oscar for her portrayal of a princess frustrated with the demands of royal life in this romantic comedy. Hepburn countinued to act in films, but eventually left Hollywood to focus on family life and work for humanitarian causes.");

insert into winner values (26,'grace_kelly.jpg', 'F', "Grace Kelly", 1954, "The Country Girl", "Kelly's win for playing the long-suffering wife of an alcoholic actor remains one of the great upsets in Oscar history. Judy Garland had been widely expected to win for 'A Star is Born,' causing Groucho Marx to refer to Kelly's win as 'the biggest robbery since Brinks.'");

insert into winner values (27,'patricia_neal.jpg', 'F', "Patricia Neal", 1963, "Hud", "Neal won for her portrayal of a world-weary housekeeper opposite Paul Newman. Neal had just over 20 minutes of screen time in the film, one of the shortest performances to ever win in this category.");

insert into winner values (28,'julie_andrews.jpg', 'F', "Julie Andrews", 1964, "Mary Poppins", "Andrews won for her film debut, playing the 'practically perfect' British nanny in this Walt Disney classic.");

insert into winner values (29,'glenda_jackson.jpg', 'F', "Glenda Jackson", 1970, "Women in Love", "Jackson's first Oscar was for her role as a mercurial artist in a tormented relationship in this adaptation of the novel by D.H. Lawrence.");

insert into winner values (30,'faye_dunaway.jpg', 'F', "Faye Dunaway", 1976, "Network", "Dunaway won for her performance of a ruthless television executive looking for a hit show in this satire written by Paddy Chayefsky. The film also won Oscars for Lead Actor Peter Finch and Chayefsky's screenplay.");

insert into winner values (31,'diane_keaton.jpg', 'F', "Diane Keaton", 1977, "Annie Hall", "Keaton won for her role as the title character in Woody Allen's Best Picture Oscar winner about the failed relationship between a comedian and an aspiring singer.");

insert into winner values (32,'jane_fonda.jpg', 'F', "Jane Fonda", 1978, "Coming Home", "Fonda's second Oscar was for her role as a military wife who has an affair with a paralyzed veteran (Best Actor winner Jon Voight).");

insert into winner values (33,'meryl_streep.jpg', 'F', "Meryl Streep", 1982, "Sophie's Choice", "After winning in the supporting category three years earlier, Streep won her second Oscar for her performance as a Polish-born Holocaust survivor.");

insert into winner values (34,'marlee_matlin.jpg', 'F', "Marlee Matlin", 1986, "Children of a Lesser God", "At the age of 21, Matlin was the youngest actress to win in this category, earning her Oscar for playing a troubled deaf girl in this adaptation of the Tony-winning play.");

insert into winner values (35,'kathy_bates.jpg', 'F', "Kathy Bates", 1990, "Misery", "Bates won for her iconic performance as Annie Wilkes, a murderous nurse who kidnaps and tortures her favorite author in this adaptation of the novel by Stephen King.");

insert into winner values (36,'emma_thompson.jpg', 'F', "Emma Thompson", 1992, "Howards End", "Thompson won her first Oscar for her portrayal of an independent and forward-thinking woman in turn-of-the-century England. Thompson later won an Oscar for her screenplay for “Sense and Sensibility,” making her the only person to win for both acting and writing.");

insert into winner values (37,'holly_hunter.jpg', 'F', "Holly Hunter", 1993, "The Piano", "Hunter won the Oscar, as well as virtually every other Best Actress prize, for her portrayal of a mute woman in an arranged marriage whose passions are awakened by a dark stranger who has possession of her beloved piano.");

insert into winner values (38,'susan_sarandon.jpg', 'F', "Susan Sarandon", 1995, "Dead Man Walking", "After four previous nominations, Sarandon won for her portrayal of anti-death penalty activist Sister Helen Prejean in this drama directed by Sarandon's then-partner, Tim Robbins.");

insert into winner values (39,'frances_mcdormand.jpg', 'F', "Frances McDormand", 1996, "Fargo", "McDormand is a popular winner for her performance as a pregnant Minnesota police chief investigating a series of murders in this Coen Brothers classic.");

insert into winner values (40,'helen_hunt.jpg', 'F', "Helen Hunt", 1997, "As Good as It Gets", "The four-time Emmy winner won her Oscar for her portrayal of a waitress who catches the eye of an misanthropic author (Best Actor winner Jack Nicholson) in this romantic comedy.");

insert into winner values (41,'joaquin_phoenix.jpg', 'M', "Joaquin Phoenix", 2019, "Joker", "Phoenix swept the precursors on his way to a career-first victory for playing Arthur Fleck, a troubled loner who becomes the killer clown known as Joker.");

insert into winner values (42,'rami_malek.jpg', 'M', "Rami Malek", 2018, "Bohemian Rhapsody", "Malek swept the precursors on his way to a career-first Oscar victory for playing Queen frontman Freddie Mercury in this biographical drama.");

insert into winner values (43,'gary_oldman.jpg', 'M', "Gary Oldman", 2017, "Darkest Hour", "Oldman's first career Oscar for his transformative performance as Winston Churchill, put his name on an expansive list of actors who have won awards hardware for playing the British Prime Minister.");

insert into winner values (44,'eddie_redmayne.jpg', 'M', "Eddie Redmayne", 2014, "The Theory of Everything", "Redmayne plays renowned scientist Stephen Hawking in this biopic that focuses on Hawking's relationship with his ex-wife Jane (played by Best Actress nominee Felicity Jones).");

insert into winner values (45,'colin_firth.jpg', 'M', "Colin Firth", 2010, "The King's Speech", "Firth stars as King George VI, the reluctant British monarch struggling with a stuttering problem, in this Best Picture Oscar winner.");

insert into winner values (46,'jeff_bridges.jpg', 'M', "Jeff Bridges", 2009, "Crazy Heart", "After four previous nominations, Bridges won his first Oscar as a troubled, alcoholic, Country singer seeking redemption.");

insert into winner values (47,'forest_whitaker.jpg', 'M', "Forest Whitaker", 2006, "The Last King of Scotland", "Whitaker won his Oscar for playing the bloodthirsty and maniacal Ugandan president, Idi Amin.");

insert into winner values (48,'jamie_foxx.jpg', 'M', "Jamie Foxx", 2004, "Ray", "Foxx dominated the awards derby for his intense performance as the legendary R&B singer in Taylor Hackford's Oscar-nominated biopic.");

insert into winner values (49,'adrien_brody.jpg', 'M', "Adrien Brody", 2002, "The Pianist", "Brody was a surpise winner for his role as Władysław Szpilman, a Jewish musician forced into hiding during the Holocaust, in this historical drama directed by Roman Polanksi, who also won the Oscar for Directing. Brody holds the record as being the youngest actor to ever win in this category.");

insert into winner values (50,'kevin_spacey.jpg', 'M', "Kevin Spacey", 1999, "American Beauty", "Spacey plays Lester Burnham, an advertising executive experiencing a midlife crisis in this Best Pitcure Oscar winner.");

insert into winner values (51,'roberto_benigni.jpg', 'M', "Roberto Benigni", 1998, "Life is Beautiful", "The Italian actor, who also wrote and directed the film, takes on the role of a Jewish Italian who uses humor to protect his son from the horrors of a Nazi concentration camp. Benigni's joyous reaction upon winning made him a media sensation, as well as the first male actor to win for a non-English speaking role.");

insert into winner values (52,'geoffrey_rush.jpg', 'M', "Geoffrey Rush", 1996, "Shine", "Rush earned his Oscar playing David Helfgott, an Austrailian concert pianist living with severe mental illness who struggles to reconnect with his music.");

insert into winner values (53,'tom_hanks2.jpg', 'M', "Tom Hanks", 1994, "Forrest Gump", "Hanks became the first actor since Spencer Tracy (1937, 1938) to win consecutive Best Actor trophies. This award was for playing the good-hearted title character who finds himself involved in some of the defining moments of the 1960s and 1970s.");

insert into winner values (54,'anthony_hopkins.jpg', 'M', "Anthony Hopkins", 1991, "The Silence of the Lambs", "With only 16 minutes of screen time, Hopkins created one of the great screen villains of all time in Hannibal “The Cannibal” Lecter. The film is one of only three to win Oscars for Picture, Actor, Actress, Director and Screenplay.");

insert into winner values (55,'daniel_day_lewis.jpg', 'M', "Daniel Day Lewis", 1989, "My Left Foot", "Day-Lewis won his first Oscar and received a standing ovation for his portrayal of Christy Brown, an Irish-born writer and painter with Cerebral Palsy who did all of his artistic work using the toes on his left foot.");

insert into winner values (56,'michael_douglas.jpg', 'M', "Michael Douglas", 1987, "Wall Street", "After winning an Oscar as a producer \"One Flew Over the Cuckoo's Nest,\" Douglas won his first acting Oscar for playing the sleazy Wall Street broker Gordon Gecko and popularized the phrase, \"Greed is Good.\"");

insert into winner values (57,'jon_voight.jpg', 'M', "Jon Voight", 1978, "Coming Home", "Voight's Oscar was for his role as a crippled and angry Vietnam veteran who finds comfort in the arms of a military wife played by Jane Fonda, who won the Best Actress award that year for her role.");

insert into winner values (58,'peter_finch.jpg', 'M', "Peter Finch", 1976, "Network", "Finch's Oscar was for his performance as 'mad prophet of the airwaves,' Howard Beale in this satire of television news. Finch died of a heart attack two months before the ceremony, making him the first actor to ever win a posthumous Oscar.");

insert into winner values (59,'marlon_brando2.jpg', 'M', "Marlon Brando", 1972, "The Godfather", "Brando refused to accept his Oscar for his iconic role as mob boss Vito 'Don' Corleone due to his disapproval of the manner in which Native Americans were portrayed by Hollywood. Instead, he sent Native American actress and activist Sacheen Littlefeather to make an onstage statement, which prompted the Academy to end its longstanding tradition of proxy acceptance speeches.");

insert into winner values (60,'rod_steiger.jpg', 'M', "Rod Steiger", 1967, "In The Heat of the Night", "Steiger came out the winner in one of the strongest Best Actor categories in history for his performance as a small-town police chief who teams with an African-American officer (Sidney Poitier) to solve a local murder.");

insert into winner values (61,'renee_zellweger.jpg', 'F', "Renee Zellweger", 2019, "Judy", "Zellweger swept the season on her way to a second Oscar victory (her first in lead) for playing Judy Garland, who spends the last months of her life performing at a final concert tour in London.");

insert into winner values (62,'olivia_colman.jpg', 'F', "Olivia Colman", 2018, "The Favourite", "Colman won her first Oscar for playing a frail Queen Anne, who governs while two cousins (Emma Stone and Rachel Weisz) vie for her affections.");

insert into winner values (63,'frances_mcdormand2.jpg', 'F', "Frances McDormand", 2017, "Three Billboards Outside Ebbing, Missouri", "McDormand earned her second Best Actress statue for her role as a grieving mother looking for vengeance following her daughter's brutal murder in Martin McDonagh's gritty drama about revenge and racism in America.");

insert into winner values (64,'emma_stone.jpg', 'F', "Emma Stone", 2016, "La La Land", "Stone plays Mia, an aspiring actress who falls in love with a jazz pianist (Ryan Gosling), in this LA-based musical from Damien Chazelle. The film infamously was named Best Picture incorrectly by presenters Faye Dunaway and Warren Beatty, when actually 'Moonlight' had prevailed.");

insert into winner values (65,'brie_larson.jpg', 'F', "Brie Larson", 2015, "Room", "Larson dominated the awards circuit for her portrayal of a mother who tries to shelter her son (Jacob Tremblay) from the reality that they are held captive in a tiny room.");

insert into winner values (66,'julianne_moore.jpg', 'F', "Julianne Moore", 2014, "Still Alice", "After four previous nominations, Moore won her first Oscar for playing a professor struggling with early onset Alzheimer's disease.");

insert into winner values (67,'cate_blanchett.jpg', 'F', "Cate Blanchett", 2013, "Blue Jasmine", "After winning in the supporting category for 2004's \"The Aviator,\" Blanchett won her first Best Actress trophy for playing a rich socialite struggling with emotional fragility after a series of tragic events in this drama directed by Woody Allen.");

insert into winner values (68,'jennifer_lawrence.jpg', 'F', "Jennifer Lawrence", 2012, "Silver Linings Playbook", "Lawrence won her Oscar for her portrayal of Tiffany, a young, mentally unstable widow who teams with a bipolar divorcee (Best Actor nominee Bradley Cooper) to enter a dance competition.");

insert into winner values (69,'natalie_portman.jpg', 'F', "Natalie Portman", 2010, "Black Swan", "Portman's Oscar was for her role as a young dancer who loses her identity and her sanity in her quest to play the principal role in 'Swan Lake.'");

insert into winner values (70,'sandra_bullock.jpg', 'F', "Sandra Bullock", 2009, "The Blind Side", "Bullock won her Oscar for playing Leigh-Anne Tuohy, a southern woman who adopts an impoverished black teenager and guides him to a successful NFL career.");

insert into winner values (71,'helen_mirren.jpg', 'F', "Helen Mirren", 2006, "The Queen", "Mirren triumphed as Queen Elizabeth II, who struggles with a monarchy facing public ridicule following the death of Princess Diana. Mirren won a Tony for playing the same character on Broadway in 2015's 'The Audience.'");

insert into winner values (72,'reese_witherspoon.jpg', 'F', "Reese Witherspoon", 2005, "Walk the Line", "Witherspoon plays June Carter Cash in this drama that chronicles the rise of legendary Country singer Johnny Cash (Joaquin Phoenix) and the beginnings of his relationship with June.");

insert into winner values (73,'julia_roberts.jpg', 'F', "Julia Roberts", 2000, "Erin Brockovich", "The star of \"Pretty Woman\" and \"My Best Friend's Wedding\" won her Oscar for her portrayal of a single mom turned consumer advocate who takes on a large energy corporation that is poisoning local residents.");

insert into winner values (74,'gwyneth_paltrow.jpg', 'F', "Gwyneth Paltrow", 1998, "Shakespeare in Love", "Paltrow plays Lady Viola, a young British woman obsessed with poetry, love, and the words of the Bard in this Best Picture Oscar winner.");

insert into winner values (75,'jessica_tandy.jpg', 'F', "Jessica Tandy", 1989, "Driving Miss Daisy", "At the age of 80, Tandy became the oldest performer in Oscar history to triumph in the leading category, winning for her performance as a proud southern woman forced to have a chauffeur rather than continue to drive herself.");

insert into winner values (76,'cher.jpg', 'F', "Cher", 1987, "Moonstruck", "The veteran singer and entertainer won her Oscar for portraying an Italian-American widow who falls in love with her new fiance's brother.");

insert into winner values (77,'sally_field.jpg', 'F', "Sally Field", 1984, "Places in the Heart", "Field won her second Oscar for playing a Depression-era widow struggling to keep her family farm afloat. Field's acceptance speech, particularly her repeated expression of 'you like me,' became a part of Hollywood lore.");

insert into winner values (78,'sally_field2.jpg', 'F', "Sally Field", 1979, "Norma Rae", "Field's first Oscar was for her role as a factory worker who fights to create a labor union at a North Carolina textile factory.");

insert into winner values (79,'katharine_hepburn.jpg', 'F', "Katharine Hepburn", 1967, "Guess Who's Coming to Dinner", "Hepburn had a 34-year wait between her first and second Oscar wins. She earned this prize for playing the mother of a woman who announces that she plans to marry a black man. Hepburn starred opposite her longtime love, Spencer Tracy, who died just two weeks after filming was completed.");

insert into winner values (80,'julie_christie.jpg', 'F', "Julie Christie", 1965, "Darling", "Christie won her Oscar for playing a self-destructive model in this British drama directed by John Schlesinger.");

insert into winner values (81,'simone_signoret.jpg', 'F', "Simone Signoret", 1959, "Room at the Top", "Signoret was the first French actress to claim an acting Oscar, winning for playing an older married woman who has an affair with a younger man.");

insert into winner values (82,'joanne_woodward.jpg', 'F', "Joanne Woodward", 1957, "The Three Faces of Eve", "Woodward won for her portrayal of a young woman with multiple personalities. Woodward was relatively unknown at the time, but went on to earn three more nominations over the course of her career.");

insert into winner values (83,'anna_magnani.jpg', 'F', "Anna Magnani", 1955, "The Rose Tattoo", "The Italian actress won for her portrayal of a widow who discovers her late husband's secret activities in this adaptation of the play by Tennessee Williams.");

insert into winner values (84,'judy_holliday.jpg', 'F', "Judy Holliday", 1950, "Born Yesterday", "Holliday was a popular winner for her portrayal of a mob boss's ditzy girlfriend, defeating the likes of Gloria Swanson ('Sunset Boulevard') and Bette Davis ('All About Eve').");

insert into winner values (85,'loretta_young.jpg', 'F', "Loretta Young", 1947, "The Farmer's Daughter", "Young, a former child star, won her Oscar for playing a maid who develops political ambitions after she begins working for a congressman.");

insert into winner values (86,'olivia_de_havilland.jpg', 'F', "Olivia de Havilland", 1946, "To Each His Own", "De Havilland's first Oscar was for her role as woman who gives up her children for adoption and spends the rest of her life trying to find redemption.");

insert into winner values (87,'joan_crawford.jpg', 'F', "Joan Crawford", 1945, "Mildred Pierce", "Crawford's Oscar was for her role as a middle-class mother struggling to maintain her dignity against the backdrop of the Depression. The film was later remade into an Emmy-winning HBO miniseries starring Kate Winslet.");

insert into winner values (88,'fredric_march.jpg', 'M', "Fredric March", 1946, "The Best Years of Our Lives", "March won his second Oscar for his portrayal of a serviceman adjusting to life at home following his service in World War II.  The film won seven Oscars, including Best Picture.");

insert into winner values (89,'gary_cooper.jpg', 'M', "Gary Cooper", 1952, "High Noon", "Cooper's second Oscar was for his role as a town marshal forced to single-handedly defeat a group of outlaws.");

insert into winner values (90,'james_cagney.jpg', 'M', "James Cagney", 1942, "Yankee Doodle Dandy", "Cagney won his Oscar for his performance in this biographical music about the legendary Broadway producer and entertainer, George M. Cohan.");

insert into winner values (91,'sean_penn.jpg', 'M', "Sean Penn", 2008, "Milk", "Penn earned his second Oscar for portraying the pioneering gay rights activist in this biopic from director Gus Van Sant.");

insert into winner values (92,'daniel_day_lewis2.jpg', 'M', "Daniel Day Lewis", 2007, "There Will Be Blood", "The role of Daniel Plainveiw, a misanthropic oil tycoon looking for wealth the early 20th century, earned Day-Lewis his second Best Actor Oscar.");

insert into winner values (93,'philip_seymour_hoffman.jpg', 'M', "Philip Seymour Hoffman", 2005, "Capote", "Hoffman, who passed away in 2014, won his Oscar for playing the larger-than-life author as he struggles to complete the now classic true-crime novel, 'In Cold Blood.'");

insert into winner values (94,'denzel_washington.jpg', 'M', "Denzel Washington", 2001, "Training Day", "After winning a Supporting Actor statue for 'Glory' in 1989, Washington won his first Best Actor prize playing a corrupt Los Angeles narcotics officer.");

insert into winner values (95,'kate_winslet.jpg', 'F', "Kate Winslet", 2008, "The Reader", "On her sixth nomination, Winslet won her first Oscar for playing an illiterate German woman whose actions have devastating consequences for her young suitor.");

insert into winner values (96,'meryl_streep2.jpg', 'F', "Meryl Streep", 2011, "The Iron Lady", "Oscar's most nominated actress won her first statue in 29 years for her role as British Prime Minister Margaret Thatcher. It was Streep’s third Oscar win overall, and her second win in this category.");

insert into winner values (97,'marion_cotillard.jpg', 'F', "Marion Cotillard", 2007, "La Vie en Rose", "The actress won her Oscar for her portrayal of famed French singer Edith Piaf, becoming only the second actress to win for a non-English-speaking performance.");

insert into winner values (98,'maggie_smith.jpg', 'F', "Maggie Smith", 1969, "The Prime of Miss Jean Brodie", "Smith won her first Oscar for her portrayal of a teacher at an all-girls school whose unconventional methods put her at odds with some of her students.");

insert into winner values (99,'anne_bancroft.jpg', 'F', "Anne Bancroft", 1962, "The Miracle Worker", "Bancroft won for reprising her Tony-winning role of a teacher working with a young Helen Keller in this adaptation of the hit Broadway play. Joan Crawford accepted the Oscar for an absent Bancroft as a way to spite Crawford’s 'Baby Jane' co-star, Bette Davis.");

insert into winner values (100,'cliff_robertson.jpg', 'M', "Cliff Robertson", 1968, "Charly", "Robertson's Oscar was for his role as a mentally disabled man whose IQ is tripled after a series of scientific experiments. The win was controversial, prompting Time magazine to single out Robertson's win as an example of the power of 'outright excessive and vulgar solicitation of votes.'");

insert into winner values (101,'lee_marvin.jpg', 'M', "Lee Marvin", 1965, "Cat Ballou", "Marvin won for playing a dual role of an alcoholic gunslinger and a noseless criminal in this comedy-western.");

insert into winner values (102,'dustin_hoffman2.jpg', 'M', "Dustin Hoffman", 1988, "Rain Man", "Hoffman won his second Best Actor trophy for his portrayal of Raymond Babbitt, an autistic savant who is kidnapped by his estranged brother (Tom Cruise). The film went on to win Oscars for Best Picture, Director and Screenplay.");

insert into winner values (103,'ben_kingsley.jpg', 'M', "Ben Kingsley", 1982, "Gandhi", "Kingsley earned his Oscar for taking on the role as the iconic leader of India's fight for independence from Great Britain. The film won eight Oscars that year including Best Picture, Director and Screenplay.");

insert into winner values (104,'mary_pickford.jpg', 'F', "Mary Pickford", 1929, "Coquette", "Pickford won her Oscar for her role as a southern belle who toys with numerous suitors, leading to tragic consequences for all involved. Pickford also served as a producer on the film, having bought the rights to the stage play.");

insert into winner values (105, 'shar_williams.jpg', 'M', "Shar Williams", 1912, "Cyber War", "Hailing from Myanmar, a newcomer Shar won the hearts of all Americans with his brave and brilliant horse-riding stunts in the movie Cyber War depicting a futuristic world of Year 2020 where the world is overtaken by the aliens from Neptune and Pluto.");

insert into winner values (106, 'yimeng_roosevelt.jpg', 'F', "Yimeng Roosevelt", 1936, "Colonial Transformation", "Amidst the Nazi expansion in the West and the Japanese invasion in the East, Yimeng unleashes brilliant acting skills as a double spy! 'Every scene where I had to run on high heels, I was prepared to take a fall or injure my ankles. But I am super nimble - nothing could hurt me!'");

insert into winner values (107, 'layfoo_grabowski.jpg', 'M', "Layfoo Grabowski", 1949, "Shut Up", "Layfoo's Oscar was for his role as a tough high school teacher in a rural coal mining town in Colorado in the middle of recovering from the World War II which killed millions of people world-wide. Said with such a cheering spirit, Layfoo's 'Shut Up' almost sounded like 'Cheer Up.'");

insert into winner values (108, 'phris_coskitt.jpg', 'M', "Phris Coskitt", 1972, "Beer on the Moon", "Obsessed with craft beer and the space race, American Phris Coskitt successfully convinced the US NASA to onboard his very own craft beer brewing kits on Apollo 13. 'It is my dream to have craft beer named after myself to be the first alcoholic drink to be served on the Moon.' His dream is yet to be achieved as the Apollo 13 mission failed due to malfunctioning and in fact, the entire Apollo mission folded permanently in 1972.");

insert into winner values (109, 'kyong_foster.jpg', 'M', "Kyong Foster", 1997, "Cat Whisperer", "The mother of a severely traumatized son enlists the aid of a unique cat trainer to help the boy's equally injured cat. It is widely known that during the filming of the movie, Kyong Foster attracted all kinds of stray cats mysteriously appearing from nowhere making the 'V' sign with their tiny fingers whenever the director shouted 'Action!'");