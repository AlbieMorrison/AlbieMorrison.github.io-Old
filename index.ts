(() => {
    type Position = [number, number];

    type DataBox = {
        name: string;
        desc?: string;
        pos?: Position;
        angle?: number;
        children?: DataBox[];
        drawn?: boolean;
        path?: string;
    };

    const VIOLIN: DataBox = {
        name: "Violin",
        desc: "Violin is the instrument I've played for the longest time; my first practice log is from March 3, 2015.<br><p>I have well over 1200 hours of play time.</p>",
        children: [
            {
                name: "Repertoire",
                desc: "I have played a variety of music. For the most part, it's been classical, but more recently I've played a bit more contemporary music, mostly with my siblings.",
                children: [
                    {
                        name: "Worship music",
                        desc: "I have played in the band at <a href=\"https://www.redeemerbible.church\" target=\"_blank\">Redeemer Bible Church</a> a few times, but mostly this has been playing through chord sheets, etc."
                    },
                    {
                        name: "Suzuki books",
                        desc: `I have played all of the songs in the Suzuki Violin books
                            <a href="https://www.alfred.com/suzuki-violin-school-volume-3/p/00-0148S/#contents" target="_blank">3</a>, 
                            <a href="https://www.alfred.com/suzuki-violin-school-volume-4/p/00-50106/#description_header" target="_blank">4</a>, 
                            <a href="https://www.alfred.com/suzuki-violin-school-volume-5/p/00-0152S/#contents" target="_blank">5</a>, and 
                            <a href="https://www.alfred.com/suzuki-violin-school-volume-6/p/00-0154S/#contents" target="_blank">6</a>.`
                    },
                    {
                        name: "Concertos",
                        desc: "I've played many concertos and other longer pieces, including Seitz, Vivaldi, and others. My favorites, though, have been Bach concertos. All of those are challenging to play yet beautiful when done well."
                    },
                    {
                        name: "Etudes",
                        desc: "There are a variety of etude books that I've worked my way through;"
                    },
                    {
                        name: "Self-arranged music",
                        desc: "As shown in the Music arrangement node, I have arranged a variety of pieces and have played all of them that include a violin!"
                    }
                ]
            },
            {
                name: "History",
                desc: `From the first time I was given the choice to play an instrument, violin was one I liked the sound of. (I had also heard it is one of the harder instruments to learn well, and I love a good challenge)!<br>
                    <p>My first (1/2 size) violin came from a friend as a loan, until I outgrew it. Eventually I grew into a full-size violin, and bought one for $200 at <a href="https://www.paigesmusic.com/paiges/run?id=6" target="_blank">Paige's Music</a>.
                    That was a bargain deal, as it was a $2000 violin gotten for a tenth of the price, just because of some small cosmetic defects.</p>`
            }
        ]
    };
    const FAMILY: DataBox = {
        name: "Family",
        desc: "People who are always around me. Better learn to like them!",
        children: [
            {
                name: "Siblings",
                desc: "I am the oldest of 6 siblings; there are 4 boys and 2 girls, and get this: none of us are confused about that. Sadly that's getting less and less common in today's world."
            },
            {
                name: "Basic info",
                desc: `The Morrison household consists of 6 (sometimes squirrel-y) children and our parents.<br>
                    <p>We live in Franklin, IN, where you can get all four seasons in a single day.</p>`
            },
            {
                name: "Parents",
                desc: "We have two wonderful parents who care for us just the way God intended. He couldn't have picked better when he put us all in the same family."
            }
        ]
    };
    const SCHOOL: DataBox = {
        name: "School",
        desc: "All that learning stuff.",
        children: [
            {
                name: "Where I'm going",
                desc: "What are the next steps in my education? I always want to learn more.",
                children: [
                    {
                        name: "College?",
                        desc: `Attending an institution of higher education is something I'd love to do; since I always want to keep learning, going somewhere meant solely for that purpose for an extended period of time would be an amazing opportunity.<br>
                            <p>If I can go to college, it'll probably be at Cedarville University in Ohio. I will major in Computer Engineering and minor in Bible and possibly Entrepreneurship.</p>`
                    },
                    {
                        name: "No college?",
                        desc: "Even if I can't afford college, that doesn't mean I will stop learning! One of my dreams is to be entrepreneurial and own my own business. If you want to learn more about that, check out the Work node."
                    }
                ]
            },
            {
                name: "Where I've been",
                desc: "I was home educated from birth through high school.",
                children: [
                    {
                        name: "Early education",
                        desc: `I've always loved math, science, and pretty much anything technical. Since I learned to read when I was 3, I haven't stopped reading books, papers, instructions, documentation, encyclopedias, and many other things.<br>
                            <p>During my younger years, my parents also put a lot of work into making sure I learned everything I needed to, even the stuff I didn't like (writing, for example).<br>
                            That work has paid off, and now I like almost every subject (with the exception of broad history courses, although I still like specific ones).</p>`,
                        children: [
                            {
                                name: "Scratch",
                                desc: "One of the more nerdy things I did when I was younger was coding projects on Scratch, which is a visual, block-based coding tool made by MIT.",
                                path: "https://scratch.mit.edu/"
                            },
                            {
                                name: "Algebra",
                                desc: "I told you I've always been math-oriented...well, here's the proof: I started Algebra 1 (using the excellent Math-U-See curriculum) when I was 11."
                            }
                        ]
                    },
                    {
                        name: "High school",
                        desc: "Part of my education at home involving \"high school-level\" courses.",
                        children: [
                            {
                                name: "Language",
                                desc: `I've gone through several language arts courses, including Wordsmith Craftsman, IEW's Student Writing Intensive, and their Windows to the World curriculum.<br>
                                    <p>Along with that, I've had the pleasure of reading many great classic books like The Count of Monte Cristo, War and Peace, the Iliad and the Odyssey, etc.</p>
                                    <p>Overall, the language courses I've taken have greatly improved my ability to communicate through words on a page (or screen, as the case may be), even if writing isn't my strongest subject.</p>`
                            },
                            {
                                name: "Math",
                                desc: `As you can probably tell, math is one of my favorites. I've completed several levels of algebra, as well as geometry, trigonometry, and calculus A (all through Math-U-See).<br>
                                    <p>Regardless of what many people say, math is one of the most fun subjects for me; it's the language of order that helps us describe how God made the world in an orderly way.</p>`
                            },
                            {
                                name: "LOGIC",
                                desc: "As a family, we participate in this AMAZING speech and debate club. For any homeschooler who hasn't tried speech and debate, it's great.",
                                path: "https://www.homeschool-life.com/1298/",
                                children: [
                                    {
                                        name: "Debate",
                                        desc: `This is the primary activity I participated in during my time with LOGIC. Without a doubt, it's one of the best activities I've ever participated in.<br>
                                            <p>Debate involves research, study, competition, speaking skills, and thinking on your feet.</p>
                                            <p>It teaches you some of the most useful skills that you can have, ones that I will use just about every day of my life.</p>`
                                    },
                                    {
                                        name: "Speech",
                                        desc: "I participated in a variety of speech events, including limited preparation events and events where I delivered memorized speeches. Learning how to speak well in a variety of situations, in front of an audience, is an important skill that is disappearing in America."
                                    }
                                ]
                            },
                            {
                                name: "Sciences",
                                desc: "Biology, Chemistry, Anatomy and Physiology, Botany, Fizzicks; they are all ways to help us describe God's creation, and that's what makes them enjoyable."
                            },
                            {
                                name: "...and more",
                                desc: "What I have put here is just a small selection of the many things I have learned about throughout my education, which has given me the capabilities I have now."
                            }
                        ]
                    }
                ]
            }
        ]
    };
    const FRIENDS: DataBox = {
        name: "Friends",
        desc: "N/A",
        // desc: "People who I choose to spend time around; a bit of a different relationship than family.",
        path: "/none.html"
    };
    const PROJECTS: DataBox = {
        name: "Projects",
        desc: "Notable things I have made or done.",
        children: [
            // Digital
            {
                name: "Digital",
                desc: "A selection of my favorite/best projects in the world of 1s and 0s.",
                children: [
                    // Infinity Tic-Tac-Toe
                    {
                        name: "Infinity Tic-Tac-Toe",
                        desc: "Infinity Tic-Tac-Toe builds upon the classic game of tic-tac-toe with some interesting twists. Try it to find out!",
                        children: [
                            {
                                name: "The idea",
                                desc: `The idea for a game of tic-tac-toe where each square contains another tic-tac-toe board and you win the lower level boards to get spaces in the higher level boards has been circling around in my family for years.
                                    <p>I simply finally decided to turn it into a multiplayer web game. I figured it would be a great warm-up/practice run for coding Spacetime later, as it would give me some experience writing efficient websocket code.</p>
                                    <p>So this whole project was really just a warm-up for coding Spacetime and other web-based games later.</p>`
                            },
                            {
                                name: "The process",
                                desc: `It actually took me a while to decide whether to use TypeScript or just plain JS for this project, but I ended up going with the TS option because it is generally easier to write code that works as intended when you have typing capability.
                                    <p>After that, actually producing the game took a surprisingly short amount of time.</p>`,
                                children: [
                                    {
                                        name: "Server",
                                        desc: `I wrote the server for this game in NodeJS with TypeScript as the language.
                                            <p>It turns out that writing server-side code in NodeJS is one of my favorite types of programming<p>
                                            <p>The actual code of this game is very small, very light, and very simple. The only real hard part was figuring out the binary messaging system between the server and the client.</p>`
                                    },
                                    {
                                        name: "Client",
                                        desc: `Writing the client for Infinity Tic-Tac-Toe was very enjoyable; it involved some fun CSS and HTML and a lot of TypeScript for the server communication and also the canvas drawing and rendering.`
                                    },
                                    {
                                        name: "Hosting",
                                        desc: `After coding a working version of this game, I had to decide where and how to host the server. Since I needed a fully custom server code, I couldn't simply upload it to a Wordpress site or something.
                                            <p>In the end, I decided to rent an Ubuntu virtual machine through DigitalOcean, so I had to configure it through SSH and a terminal window.</p>
                                            <p>Site security was also an interesting problem to solve. Since I didn't want to pay a bunch for an HTTPS certificate, I ended up finding a free service that will give and renew short-life HTTPS certificates called Let's Encrypt. So far it seems to have worked well.</p>`
                                    }
                                ]
                            },
                            {
                                name: "The result",
                                desc: "This game turned out quite fun; there are still some small bugs but overall it works well. One thing to note: it takes an incredibly long time to play if you have more than a couple layers!",
                                path: "https://tictactoe.albiemorrison.com/"
                            }
                        ]
                    },
                    // Starblast mods
                    // {
                    //     name: "Starblast.io mods",
                    //     desc: "These are mods for the game <a href=\"https://starblast.io\" target=\"_blank\">https://starblast.io</a>.",
                    //     children: [
                    //         {
                    //             name: "Hardpoint mod",
                    //             desc: "I wanted to code a hardpoint gamemode for this game, and this mod also has some unique twists not really found in any other mods for this game.",
                    //             path: "https://github.com/AlbieMorrison/Hardpoint_Mod"
                    //         },
                    //         {
                    //             name: "Insect mod",
                    //             desc: "This is another interesting mod idea I had that breaks the flow of the base game and adds additional fun features. I never fully finished this mod, but it's a good start at least!",
                    //             path: "https://github.com/AlbieMorrison/Insect_Mod"
                    //         }
                    //     ]
                    // },
                    // Spacetime
                    {
                        name: "Spacetime",
                        children: [
                            {
                                name: "Inspiration"
                            },
                            {
                                name: "Motivation"
                            },
                            {
                                name: "Execution"
                            }
                        ]
                    },
                    // LOGIC site
                    {
                        name: "LOGIC Website",
                        children: [
                            {
                                name: "Problem",
                                desc: `The LOGIC site is hard to use and navigate, and has many other small problems as well.
                                    <img src="img/logic_site/old_site_forum.png" alt="Forum on LOGIC site" width="400" height="256">`
                            },
                            {
                                name: "New site",
                                desc: `Because of all those problems, I started into coding a new website for the speech and debate club. Even knowing it would probably never get used, it was still a great learning experience.
                                    <p>I got do a little of everything in this project, from user databases to payment methods to UI design.</p>`,
                                children: [
                                    {
                                        name: "Client"
                                    },
                                    {
                                        name: "Server",
                                        desc: `The webpage users see might be the first thing that comes to mind at the word "website."
                                            <p>But the server is also an essential part of every website; without it, none of that content could even get to the user!</p>
                                            <p>On this project, I coded the entire server from scratch in NodeJS; it was helpful to use the same base language for the functional parts of both the server and client parts of this project.</p>`,
                                        children: [
                                            {
                                                name: "Security"
                                            },
                                            {
                                                name: "Payments"
                                            },
                                            {
                                                name: "Database"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    // SBSE++
                    {
                        name: "SBSE++",
                        children: [
                            {
                                name: "The original"
                            },
                            {
                                name: "My improvements"
                            },
                            {
                                name: "Challenges"
                            }
                        ]
                    },
                    // SD projects
                    {
                        name: "SD projects",
                        desc: "Some projects that I've done primarily for Streamline Designs.",
                        children: [
                            // ULog Utility
                            {
                                name: "ULog Utility",
                                children: [
                                    {
                                        name: "What is it?"
                                    },
                                    {
                                        name: "Development"
                                    },
                                    {
                                        name: "Functionality"
                                    }
                                ]
                            },
                            // Process plans
                            {
                                name: "Process plans",
                                children: [
                                    {
                                        name: "The problem"
                                    },
                                    {
                                        name: "The solution"
                                    }
                                ]
                            },
                            // Drone code
                            {
                                name: "Code for drones",
                                children: [
                                    // RC
                                    {
                                        name: "RC transmitter"
                                    },
                                    // Onboard
                                    {
                                        name: "Onboard firmware"
                                    }
                                ]
                            }
                        ]
                    },
                    // AlbieMorrison.github.io
                    {
                        name: "albiemorrison.github.io",
                        desc: `I coded this website from scratch, including a procedural engine for placing the nodes.
                            <p>You can find the Github repository by clicking this node.</p>`,
                        path: "https://github.com/AlbieMorrison/AlbieMorrison.github.io"
                    },
                    // Experience
                    {
                        name: "Experience",
                        desc: "The languages I have experience with.",
                        children: [
                            {
                                name: "HTML and CSS",
                                desc: "I have quite a bit of experience with HTML and CSS, having built multiple web pages and applications using them."
                            },
                            {
                                name: "TS and JS",
                                desc: "TypeScript is one of my favorite languages to program in, and JavaScript is very similar, just without the typing capability."
                            },
                            {
                                name: "Python",
                                desc: "My experience coding in Python mostly comes from Streamline Designs (my workplace) and also some small projects that just need a quick script whipped up."
                            },
                            {
                                name: "SQLite",
                                desc: "The ULog Utility project has given me a bit of experience working with databases."
                            },
                            {
                                name: "C/C++",
                                desc: "I have a decent amount of experience programming in C++, since all of the firmware I have written for drones (as well as a few other projects) has been in C++."
                            },
                            {
                                name: "Java",
                                desc: "I've only done a bit of Java, when I coded a chess timer app for Android once."
                            }
                        ]
                    }
                ]
            },
            // Physical
            {
                name: "Physical",
                desc: "A few highlights of my projects that are made in reality.",
                children: [
                    // 2021 Bow Build
                    {
                        name: "2021 Bow Build",
                        desc: "This was me deciding to use 4-H as an excuse to do something I've always wanted to do: build a shooting bow from scratch.",
                        children: [
                            {
                                name: "Photos",
                                desc: "Some pictures of the process.",
                                children: [
                                    {
                                        name: "Shaping",
                                        desc: `<img src="img/bow/stave_0.jpg" alt="Bow stave" width="256" height="256"><br>
                                            <img src="img/bow/stave_1.jpg" alt="Bow stave end view" width="256" height="256">
                                            <img src="img/bow/shaving_0.jpg" alt="Shaving wood" width="256" height="256">`
                                    },
                                    {
                                        name: "Jigs",
                                        desc: `<img src="img/bow/jig_building.jpg" alt="Drilling to make jig" width="256" height="256">`
                                    },
                                    {
                                        name: "Tips/riser",
                                        desc: `<img src="img/bow/tip_0.jpg" alt="Aluminum tip" width="256" height="256"><br>
                                            Look carefully to see the aluminum riser bonded onto the other side of the bow.<br>
                                            <img src="img/bow/riser_0.jpg" alt="Aluminum riser" width="256" height="384">`
                                    },
                                    {
                                        name: "Tillering",
                                        desc: `<img src="img/bow/tillering_0.jpg" alt="Tillering side view" width="256" height="400"><br>
                                            <img src="img/bow/tillering_1.jpg" alt="Tillering stick stood up" width="256" height="256"><br>
                                            <img src="img/bow/tillering_2.jpg" alt="Tillering full view" width="400" height="256">`
                                    }
                                ]
                            },
                            {
                                name: "Process",
                                desc: "How do you go about building a bow?",
                                children: [
                                    {
                                        name: "Summary",
                                        desc: `January - February: Research and decisions about materials, sources, technique, etc.
                                            <p>March: Ordered bow stave (hickory board) from Ringing Rocks Archery; decided on bowstring material, ordered B55 string material and serving thread with jig; research on bowstring making, decided on endless loop type of string; fabricated bowstring jig of my own design; cut angles to bring wood to rough shape.</p>
                                            <p>April: Sanded bow to round edges; decided on tip overlay and riser material (aluminum); fabricated tip overlays and riser; decided on regular Gorilla epoxy for gluing tips and riser on; bonded tip overlays and riser to bow; started tillering.</p>
                                            <p>May: 25+ hours of tillering</p>
                                            <p>June: Tillering to one inch off target draw length; within one hour of shooting the bow breaks.</p>`
                                    },
                                    {
                                        name: "Details",
                                        desc: `Late March:
                                            <ul>
                                                <li>Cut angles on main wood to 1/2" x 3/16" tips and a ~8" long handle. Never cut the back of the bow (that is, the side that faces away from you when shooting)!</li>
                                            </ul>
                                            <p>April 9:
                                            <ul>
                                                <li>Sanded belly edge of bow to round shape, variable radius curve to riser area</li>
                                                <li>What glue to use for tip overlays and riser?
                                                <ul>
                                                    <li>EA-40 bow glue is ideal, but unavailable</li>
                                                    <li>E6000: good, might be too flexible</li>
                                                    <li>Do we have regular epoxy? Ask Dad</li>
                                                    <li>Wood glue - doesn't work on aluminum</li>
                                                </ul></li>
                                                <li>What material for tip overlays and riser?
                                                <ul>
                                                    <li>Riser purpose is to stop shock from traveling through the handle of the bow (metal could be even better than traditional hardwood)</li>
                                                    <li>Purpose of tip overlays is to keep the string from wearing into the tips of the actual bow and to keep the tips together; metal could be good for this too</li>
                                                    <li>Hardwood riser and phenolic overlays would be ideal, but I have no phenolic</li>
                                                    <li>Aluminum catches eye for riser, decided on aluminum riser</li>
                                                    <li>Asked experienced bowyers on Reddit about aluminum for tips as well; answer of yes</li>
                                                </ul></li>
                                                <li>Decided on standard Gorilla epoxy for gluing tip overlays and riser on, under advice of Dad</li>
                                                <li>Cut riser and tips and sanded sharp edges</li>
                                                <li>Glued on tips and riser to wood (epoxy is slippery and hard to keep clamped in one place!)</li>
                                            </ul></p>
                                            <p>June 18:
                                            <ul>
                                                <li>Tillering - got to 45# at 27"</li>
                                                <li>One inch off target</li>
                                                <li>No remaining wood removal, only pulling the bow to the next notch and waiting for thirty minutes</li>
                                                <li>Bow breaks!</li>
                                                <li>Breaks in the thin spot that I predicted it would break in if it did break</li>
                                            </ul></p>`,
                                        children: [
                                            {
                                                name: "Jig/string",
                                                desc: `You need a jig to make bowstrings (which are twisted out of up to 20 strands of bowstring material, then bound together with small thread called "serving" thread).
                                                    <p>After deciding on the type of string to use, I had to build a jig to be able to make that kind of string in a custom length and number of strands. All of the available jigs for sale were way overpriced for what they were, so I decided to build my own.</p>
                                                    <p>The jig is made out of 2x6 lumber, 1/4" steel bar, some 3/8" bolts, washers, and nuts, and drywall screws.</p>
                                                    <p>I researched necessary string lengths and regular jigs, then drew up some plans and fabricated my own jig out of materials we had around on the property.<br>
                                                    Now I can make pretty much any length of bowstring that a normal human could ever need!</p><br>
                                                    <p>Making a bowstring is a very involved process that takes concentration, consistency, and a good eye. I used a great tutorial for the actual fabrication of the string that can be found at the link this node points to.</p>
                                                    <p>For this bow, I needed to be able to have custom length strings, and so I decided to use B55 Dacron material for the strings, and a standard nylon serving thread to keep the string together and to keep it from wearing in important spots.</p>
                                                    <p>The next step in having strings to use was picking a type of string to use. There are several different types of string, but the main two are called Flemish Twist and Endless Loop. I decided on endless loop type because it gives better shooting velocity and is slightly easier to build a jig for.</p>`,
                                                path: "https://sensiblesurvival.org/2015/05/27/make-a-continuous-loop-bowstring-part-1/"
                                            },
                                            {
                                                name: "Starting out",
                                                desc: `I started with a 70" x 1.5", 0.875" thick hickory board. I decided on hickory because it has a strong reputation among the worldwide bowyer community for being nearly bombproof.
                                                    <p>The stave was ordered online off of Ringing Rocks Archery for $35.90 including shipping and came in mid to late March. When the board came, it looked to be a near perfect bow stave, with straight grain, little to no runoff, and very square edges all around.</p>
                                                    <p>The first cuts were done in late March with a DoAll bandsaw in our shop, and they were my first cuts ever made on a bandsaw (another skill learned!). I cut angles from 4 inches on either side of the center to the ends, angled in to make the board 3/8” by 5/16” on the ends. The thinner direction is the way the bow bends.</p>`
                                            },
                                            {
                                                name: "Tillering",
                                                desc: `Tillering is the main grunt work of building a bow. You have to bend the bow a little more each time, then shave off small amounts of wood to even out the curve of the back of the bow, then bend it again a little more, etc.
                                                    <p>It took well over 30 hours of tillering alone to get to the point where the bow broke. Tillering is fun but very monotonous and gets boring after a long time.</p>
                                                    <p>It's very important that you get the tiller near perfect otherwise it is very easy to break a bow, even when using hickory wood.</p>`
                                            },
                                            {
                                                name: "Tips/riser",
                                                desc: `The tip overlays are meant to protect the tips from wearing out by the string rubbing on the wood of the actual bow. The riser is meant for stopping shock from traveling through the handle of the bow.
                                                    <p>Aluminum is a good material for both of these, as it's strong but light, so I made tip overlays by cutting out small rectangles of aluminum from a sheet, then gluing them two layers thick with Gorilla Epoxy onto the tips of the actual bow.</p>
                                                    <p>For the riser, I took a thick piece of aluminum bar and cut the ends of it to 45 degree angles, then sanded it to smooth the sharp edges where it was cut. Then I bonded it to the handle with the same epoxy.</p>`
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: "Info",
                                desc: "Basic info about the bow build.",
                                children: [
                                    {
                                        name: "Costs",
                                        desc: `<ul><li>Wood bow stave: $35.90, including shipping and tax.</li>
                                            <li>Aluminum for tip overlays and riser: free to me (from our company's stock), but I used ~$6.99 of aluminum stock.</li>
                                            <li>B55 Bowstring material: $16 per spool, and one spool can make 10-15 bowstrings.</li>
                                            <li>Bowstring "serving" thread and jig: $16.99</li>
                                            <li>Wood for tillering tree and bowstring jig: free to me; these were just scraps of lumber we had laying around.</li></ul><br>
                                            <p>So overall to build the bow, it was somewhere on the order of $60 for this whole bow, plus a bit of costs for the various jigs, fixtures, and tools used during the process.</p>`
                                    },
                                    {
                                        name: "Time",
                                        desc: "All told, including research, decisions about things like what wood to use and the riser and tip material, I spent close to 70 hours on this project. It's not something you can just pick up and do in a weekend!"
                                    },
                                    {
                                        name: "Result",
                                        desc: `The normal target for a bow draw is 28". My bow got to 27" before breaking less than 45 minutes away from being able to actually shoot it.
                                            <p>A few hours before, I had predicted that if it broke, it would break at a slightly thin spot near the end of the upper limb. It broke exactly where I said it would.</p>
                                            <p>In spite of the bow breaking, it was still enough to win Reserve Champion and 1st place in the 4-H shooting sports category!</p>`,
                                        children: [
                                            {
                                                name: "Lessons learned",
                                                desc: `<ul><li>Don't hold too high of an expectation, especially on a first try doing a hard and complicated project.</li>
                                                    <li>Don't let it get you down when you fail at something! Just put it down and try again later.</li>
                                                    <li>Sometimes what looks like a failure just ends up being a better story.</li>
                                                    <li>Every bowyer breaks bows!</li></ul>`
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    // Jetson
                    {
                        name: "Mini PC",
                        desc: "For a while, I thought making a miniature PC out of an NVIDIA Jetson Xavier NX module (miniature GPU-based computer) would be fun...I finally decided to do it in November of 2022.",
                        children: [
                            {
                                name: "Takeaways",
                                desc: "Persistence, persistence, persistence. And also, when you finally break loose on an issue that has plagued you for hours, days, weeks, or even months of work, it brings a much greater satisfaction than when things just work the first time."
                            },
                            {
                                name: "Build process",
                                desc: "The whole process from design to build was fun and full of learning opportunities.",
                                children: [
                                    {
                                        name: "Design",
                                        desc: `From picking components and materials to modeling a case that fit all of the electronics to designing the aesthetics in a way that would be easy to fabricate, the design of this PC was a challenging but enjoyable process.<br>
                                            <img src="img/mini_pc/design/fan_sketch.png" alt="Sketch" width="300" height="280"><br>
                                            <img src="img/mini_pc/design/back_case.png" alt="Back case of mini PC" width="300" height="280">
                                            <p>I used parametric modeling to design each part of the case, then made a virtual assembly of the whole thing to see how it might look.</p>
                                            <img src="img/mini_pc/design/a203.png" alt="A203 carrier board model" width="256" height="128">
                                            <p>Figuring out the aesthetics of this case ended up being quite fun.</p>
                                            <img src="img/mini_pc/design/front_case_assembly.png" alt="Front of case with hexagonal pattern" width="400" height="400">
                                            <p>As I modeled and designed up this computer, I also had to keep in mind how I was going to make the parts; every method of manufacturing parts has its own strengths and weaknesses, and I was pretty sure I was going to use 3D printing for most of the parts.<br>
                                            That comes with some challenges, though, as large or flat parts tend to warp with the certain type of plastic I wanted to use.</p>
                                            <img src="img/mini_pc/design/back_side_full.png" alt="Full assembly" width="420" height="256">
                                            <p>Overall, at least in the model, I think it turned out pretty well.</p>`
                                    },
                                    {
                                        name: "Build",
                                        desc: "There were two main parts to building this computer: fabrication (making parts), and assembly (putting them together).",
                                        children: [
                                            {
                                                name: "Fabrication",
                                                desc: `Most of the parts of this computer were 3D printed out of ABS plastic (the same thing LEGOs are made of).<br>
                                                    <img src="img/mini_pc/3d_printing_0.jpg" alt="3D printing parts" width="128" height="210">
                                                    <p>The parts I didn't 3D print or manufacture at home, I got from a variety of sources. For the most part, the outside sourced parts came from <a href="https://www.mcmaster.com/">McMaster Carr</a> and Amazon.</p>
                                                    <img src="img/mini_pc/parts_0.jpg" alt="Pile of parts" width="420" height="256">
                                                    <p>The actual computer module fits in the palm of my hand!</p>
                                                    <img src="img/mini_pc/jetson_scale.jpg" alt="Jetson scale image" width="256" height="128">
                                                    <img src="img/mini_pc/jetson_parts_0.jpg" alt="Jetson parts" width="256" height="128">
                                                    <p>While i was waiting for those parts to come, I did design work and 3D printing.<br>
                                                    I ended up with quite the spread of 3D printed parts in addition to the parts bought from outside sources</p>
                                                    <img src="img/mini_pc/case_parts_0.jpg" alt="3D printed case parts" width="420" height="256">`
                                            },
                                            {
                                                name: "Assembly",
                                                desc: `Once I had all the parts, it was time to assemble this thing.<br>
                                                    <img src="img/mini_pc/top_0.jpg" alt="Top with magnets glued in" width="420" height="256">
                                                    <p>First, there were small things like gluing in the magnets used to hold the transparent sides of the PC on at the top.<br>
                                                    There was a variety of assembly required for the case, including gluing, bolts, cutting sheets of acrylic for the side panels, etc.</p>
                                                    <img src="img/mini_pc/case_0.jpg" alt="Case assembled" width="256" height="420">
                                                    <p>The fan was one of the first electrical components I tackled, since it was very simple and only involved crimping a few connectors.</p>
                                                    <img src="img/mini_pc/fan_installation_0.jpg" alt="Fan back view" width="256" height="420">
                                                    <p>After the case was done, there was more electrical assembly, like wiring up, soldering, and crimping connectors on the power button.</p>
                                                    <img src="img/mini_pc/switch_0.jpg" alt="Power button wiring" width="120" height="192">
                                                    <img src="img/mini_pc/switch_installation_0.jpg" alt="Power button installation" width="120" height="192">
                                                    <img src="img/mini_pc/wiring_0.jpg" alt="Wiring" width="120" height="192">
                                                    <p>Plus, there was the actual Jetson, which had to be installed on its carrier board along with the WiFi card, SSD, and pretty much everything else to take it from a bare processor/memory module to a real PC.</p>
                                                    <img src="img/mini_pc/jetson_assembly_0.jpg" alt="Jetson assembly" width="420" height="256">
                                                    <p>Finally, after a lot of assembly, I had the finished hardware!</p>
                                                    <img src="img/mini_pc/finished_0.jpg" alt="Finished assembly 1" width="128" height="256">
                                                    <img src="img/mini_pc/lighted_box_0.jpg" alt="Finished assembly with lights on" width="128" height="256">
                                                    <p>Even the lights turned out pretty well (although they were kind of a last-minute hack job).</p>
                                                    <p>So that's the assembly process; it was pretty involved, and with things like wiring, you learn to pay close attention to what you're doing because one mistake could be the end of the $730 board.<br>
                                                    Thankfully, I didn't have any major mishaps with the assembly!</p>`
                                            }
                                        ]
                                    },
                                    {
                                        name: "Software",
                                        desc: `The initial software/firmware installation was anything but simple and easy, but eventually I got it working. As a warning, this node will get pretty technical further down. Read at your own risk.
                                            <p>Before anything so complicate as a user interface, there were things that needed done like flashing the firmware on the actual board itself. That took a solid 10 hours of work to get it to the point where it would even take the firmware.<br>
                                            It doesn't help that I was working on fairly slow, rural internet and had to download the 8-15 GB image multiple times because of the way the firmware works on this particular line of modules from NVIDIA.<br>
                                            But eventually I got the firmware on the thing, so I could move on to the operating system.</p>
                                            <p>Since this is not a normal computer, there's no such thing as a preinstalled operating system...the only OS that works properly with this module is a specialized fork of Ubuntu (a Linux distribution) that NVIDIA distributes.<br>
                                            The downside? It doesn't support many things (one example is the latest version of WiFi, which just so happened to be what the WiFi card I bought used) that are necessary for a PC to have.</p>
                                            <p>The whole WiFi and Bluetooth thing ended up to be a much deeper rabbit hole than I expected, since every time I got the WiFi closer to working, the Bluetooth built into the same card as the WiFi started malfunctioning and behaving strangely.<br>
                                            The rabbit hole ended with me digging around in the Linux kernel code and trying to find where it interacted with the device for the WiFi card, and change settings to somehow work with the new WiFi. After hours of trial and mostly error, I finally did get it to the point where the WiFi would work and connect fairly consistently to networks.<br>
                                            I ended up having to just disable the Bluetooth entirely because it was proving not to be possible to get it working with the particular custom distribution of Linux.</p>
                                            <p>So after hours of troubleshooting, I at last had a PC that worked nearly as I wanted it to! There are several reasons why it was impractical to keep such a machine around, but I won't go into them.</p>
                                            <p>The main point here is that persistence can help you solve a lot of problems; this was certainly a project that tested my persistence and ingenuity greatly.</p>`
                                    }
                                ]
                            },
                            {
                                name: "Costs",
                                desc: "This was one of my most expensive projects in dollar amount, although it didn't take too long.",
                                children: [
                                    {
                                        name: "Time",
                                        desc: "All told, including all of the design from scratch as well as the fabrication, procurement, and assembly, I spent something like 50 hours on this project. It was pretty quick, too; only a couple months from start to finish."
                                    },
                                    {
                                        name: "Procurement",
                                        desc: "All told, the materials for this project costed me over $1100, because the computer module itself is $730 at the lowest."
                                    }
                                ]
                            }
                        ]
                    },
                    // Bookbinding
                    {
                        name: "Bookbinding",
                        desc: "Making books is something I first tried when I was somewhere around 12. That one didn't turn out too well, but since then I've gotten a bit better.",
                        children: [
                            {
                                name: "Photos",
                                desc: `<img src="img/bookbinding/journal_edge.jpg" alt="Journal, edge on" width="216" height="384">
                                    <img src="img/bookbinding/journal_top.jpg" alt="Journal, top view" width="384" height="216">`
                            },
                            {
                                name: "Materials",
                                desc: `I use whatever paper I can find enough of to do these books, which are usually between 100 and 200 pages.
                                    <p>For the covers, I have tried fabric before, but my favorite is leather. The core of the covers are made of a thin chipboard to give them some flexibility, and then that is covered with whatever other decorations or materials I choose.</p>
                                    <p>I hand-stitch the binding on every book I make, usually with upholstery thread because it's significantly stronger than normal sewing thread. The stitching is one of the hardest parts of making a book (it's also the actual "binding").</p>`
                            }
                        ]
                    },
                    // Forester
                    {
                        name: "Car repair",
                        desc: "From the fall of 2022 through the summer of 2023, I have been working on repairing and updating a 2003 Subaru Forester, which includes a lot of work on all different systems of the car.",
                        children: [
                            {
                                name: "Seat mounts",
                                desc: `The mounting tabs on the front seats were so rusty that the seats may have flown off in the event of a wreck or something; this needed fixed.
                                    <img src="img/forester/seat_tabs/removed.jpg" alt="Seat removed" width="256" height="400">
                                    <p>Fixing them involved removing the front seats, sanding the tabs, and repainting them.<br>
                                    They turned out great though!</p>
                                    <img src="img/forester/seat_tabs/new_paint_1.jpg" alt="Seat removed" width="400" height="256">`
                            },
                            {
                                name: "Electrical",
                                desc: `When I started this project, none of the interior lights or the radio worked. One of the fuses blew every time I put a new one in.<br>
                                    <img src="img/forester/electrical/main_fuse_box.jpg" alt="Fuse box" width="256" height="400">
                                    <p>Eventually, after many hours of tracing wires, removing panels, and testing for shorts, I found a broken wire above the passenger seat (it's the blue one with a red stripe).</p>
                                    <img src="img/forester/electrical/broken_wire.jpg" alt="Broken wire" width="400" height="256">
                                    <p>I fixed it with a splint, and then filed off the sharp corner of the frame it had been rubbing on.</p>
                                    <img src="img/forester/electrical/fixed.jpg" alt="Fixed wire with splint" width="256" height="400">
                                    <p>After that, all the interior lights and electrical features that had been broken started working!</p>
                                    <img src="img/forester/electrical/light_working.jpg" alt="Light working" width="400" height="256">`
                            },
                            {
                                name: "Brakes",
                                desc: "There was a significant amount of work to do on the brakes, including the parking brakes and the disc brakes as well.",
                                children: [
                                    {
                                        name: "Parking brakes",
                                        desc: `The parking brakes were deteriorated to the point where they no longer actually worked properly. Many of the springs and parts inside were broken or missing.
                                            <img src="img/forester/brakes/old_pbrake.jpg" alt="Old parking brake assembly" width="256" height="400">
                                            <img src="img/forester/brakes/old_pbrake_spring.jpg" alt="Old parking brake spring close-up" width="256" height="400">
                                            <p>I essentially replaced every part of the parking brakes except the shoes and control cables. It was quite a pain getting it all held back in there as I installed the rotor back in place.</p>
                                            <img src="img/forester/brakes/new_pbrake_springs.jpg" alt="New parking brake springs" width="256" height="400"><br>
                                            <img src="img/forester/brakes/new_pbrake.jpg" alt="New parking brake parts" width="400" height="256">`
                                    },
                                    {
                                        name: "Disc brakes",
                                        desc: `The brake pads needed replaced, but the actual rotors looked to be in good shape.<br>
                                            <img src="img/forester/brakes/new_brake_pads.jpg" alt="New brake pads" width="256" height="400">`
                                    }
                                ]
                            },
                            {
                                name: "Suspension",
                                desc: `After over 130k miles, this car needed some suspension parts replaced badly.`,
                                children: [
                                    {
                                        name: "Struts",
                                        desc: `The struts on this vehicle were so worn out that they basically did nothing.
                                            <img src="img/forester/suspension/old_strut_1.jpg" alt="Old strut" width="400" height="256">
                                            <p>Replacing all four struts involved removing the old ones (including the tightest bolts I've ever seen)...</p>
                                            <img src="img/forester/suspension/old_strut_0.jpg" alt="Tight bolts!" width="256" height="400">
                                            <p>Compressing the springs and removing them, since the springs were still good...</p>
                                            <img src="img/forester/suspension/spring_compressed_0.jpg" alt="Compressed spring" width="400" height="256">
                                            <p>Putting the springs on the new struts...</p>
                                            <img src="img/forester/suspension/new_struts.jpg" alt="New struts" width="256" height="400">
                                            <p>And installing the new struts...</p>
                                            <img src="img/forester/suspension/new_strut_0.jpg" alt="New strut installation" width="256" height="400">`,
                                    },
                                    {
                                        name: "Sway bar link",
                                        desc: `The sway bar improves handling and reduces vehicle lean toward the outside of curves. Unfortunately, on this car, one of the sway bar links was completely disconnected, the ball joint nowhere to be found.<br>
                                            <img src="img/forester/suspension/broken_sblink_0.jpg" alt="Broken sway bar link" width="192" height="384">
                                            <img src="img/forester/suspension/broken_sblink_1.jpg" alt="Broken sway bar link" width="192" height="384">
                                            <p>This was a pretty easy replacement compared to most of the other suspension work. No bolts broke or anything.</p>
                                            <img src="img/forester/suspension/new_sblink.jpg" alt="Broken sway bar link" width="400" height="256">`
                                    },
                                    {
                                        name: "Balljoints",
                                        desc: `Don't replace the ball joints on your car unless you absolutely have to...it's painful.
                                            <img src="img/forester/suspension/old_balljoint_0.jpg" alt="Old balljoint" width="400" height="256">
                                            <p>Multiple bolts broke and had to be drilled out, and it's nearly impossible to get the ball joints out of the knuckle.<br>
                                            Hopefully this car handles a ton better than it used to after this replacement, because it won't worth it otherwise!</p>`
                                    }
                                ]
                            },
                            {
                                name: "Engine",
                                desc: "As of the time of writing, this is the next step after the suspension..."
                            }
                        ]
                    }
                ]
            }
        ]
    };
    const ART: DataBox = {
        name: "Art",
        desc: "I'm living proof that you can nerd out about art too!",
        children: [
            {
                name: "Cooking",
                desc: "I love to cook and bake; there's something very satisfying about making something and then eating it."
            },
            {
                name: "Music",
                desc: "The musical/performing arts are some of my personal favorites.<br><p>I would love to learn many more instruments than I have time to play.</p>",
                children: [
                    {
                        name: "Piano",
                        desc: "I have always been exposed to piano playing, but only started doing real practice near the end of 2022."
                    },
                    VIOLIN,
                    {
                        name: "Music arrangement",
                        desc: "Another musical art I engage in is arranging songs.",
                        children: [
                            {
                                name: "How do I arrange?",
                                desc: "Through a mixture of listening, analyzing, and a great free software.",
                                children: [
                                    {
                                        name: "Software",
                                        desc: "To arrange music, I use a free software called Musescore, which I've found to be excellent and fairly easy to use.",
                                        path: "https://musescore.org/en"
                                    },
                                    {
                                        name: "Listening",
                                        desc: "For me, main part of arranging any piece of music has always been listening to it repeatedly, slowing it down, and working a few notes at a time."
                                    }
                                ]
                            },
                            {
                                name: "Pieces",
                                desc: "I have arranged several musical pieces, mostly from The Legend of Zelda: Breath of the Wild (a video game).",
                                children: [
                                    {
                                        name: "BOTW",
                                        desc: `Here is a sampling of the songs from Breath of the Wild that I have arranged:
                                            <ul><li><a href="./resources/Attack_on_Vah_Medoh.pdf" target="_blank">Attack on Vah Medoh</a></li>
                                            <li><a href="./resources/Calamity_Ganon_Medley.pdf" target="_blank">Calamity Ganon (Medley)</a></li>
                                            <li><a href="./resources/Dark_Beast_Ganon_Medley.pdf" target="_blank">Dark Beast Ganon (Medley)</a></li>
                                            <li><a href="./resources/Do_You_Remember.pdf" target="_blank">Do You Remember</a></li>
                                            <li><a href="./resources/Epilogue.pdf" target="_blank">Epilogue</a></li>
                                            <li><a href="./resources/Guardian_Scout_Battle_(Shrine_Battle).pdf" target="_blank">Guardian Scout Battle (Shrine Battle)</a></li>
                                            <li><a href="./resources/Molduga_Battle.pdf" target="_blank">Molduga Battle</a></li></ul>`
                                    },
                                    {
                                        name: "Other",
                                        desc: "I have also arranged a few other songs like Dance of the Sugar Plum Fairy from the Nutcracker."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "Origami",
                desc: `Paper folding; this is another thing I've done on and off throughout the years.`,
                children: [
                    {
                        name: "Roses",
                        desc: `The latest thing I have enjoyed folding is roses:<br>
                            <img src="./img/origami/roses_top.png" alt="Origami Roses" width="256" height="256">`
                    }
                ]
            }
        ]
    };
    const WORK: DataBox = {
        name: "Work",
        desc: "I have been employed by <a href=\"https://enablingflight.com/\" target=\"_blank\">Streamline Designs, LLC</a> (the family business) since May of 2021.",
        children: [
            {
                name: "Where I work",
                desc: "Streamline Designs is headquartered on the back of our property, so my commute is only about 80 meters!"
            },
            {
                name: "What I do",
                desc: `At work, I do a variety of things from firmware and integration to hardware assembly to design.<br>
                    <p>I work most on the <a href=\"https://enablingflight.com/unmanned-aircraft-systems/\" target=\"_blank\">drone building</a> side of the business.</p>`,
                children: [
                    {
                        name: "Software/Firmware",
                        desc: "There are a variety of things I do at SD that involve firmware, such as a communications and message translation hub inside our drones and telemetry for the radio controller so the pilot knows what the drone is doing."
                    },
                    {
                        name: "Hardware",
                        desc: "One of the activities I often work at is fabrication and assembly of drones, parts, or tools for process improvement. It's a great feeling when you design and build a tool that makes a process faster for everyone."
                    },
                    {
                        name: "Design/CAD",
                        desc: "From fixing customer CAD models to designing drone parts, the process of creating models that are well-built and work is an interesting task that I frequently engage in at work."
                    }
                ]
            }
        ]
    };
    const ABOUT_ME: DataBox = {
        name: "About me",
        desc: "Some more general stuff about me.",
        children: [
            {
                name: "Religion",
                desc: "I am a Jesus follower. I'd love to tell you more about this, just get in touch with me via Discord or email!"
            },
            {
                name: "Contact",
                desc: "These are some ways you can get in touch with me!",
                children: [
                    {
                        name: "Email",
                        desc: "me@albiemorrison.com",
                        path: "mailto:me@albiemorrison.com"
                    },
                    {
                        name: "Discord",
                        desc: "AlbieMorrison#5416"
                    }
                ]
            },
            {
                name: "Learning",
                desc: `Basically, I have a serious hunger for learning that I've never yet managed to satisfy.<br>
                    <p>I'm probably one of the most nerdy people you'll ever meet...once I get excited about something, I tend to dig into it and try to learn everything I can about it...that means I'm always busy with something!</p>`
            },
            {
                name: "Politics",
                desc: `As Ronald Reagan said, \"Government is not the solution to our problem, government is the problem.\"<br>
                    <p>I agree with that in the vast majority of cases. In terms of political standing, I lean toward being conservative on most issues.</p>
                    <p>Either way, politics isn't the most important issue to be talking about. Go look at a different node.</p>`
            }
        ]
    };
    const DATA: DataBox[] = [
        {
            name: "Albie Morrison",
            desc: "That's me!",
            children: [
                PROJECTS,
                FRIENDS,
                SCHOOL,
                WORK,
                ABOUT_ME,
                ART,
                FAMILY
            ]
        }
    ];
    const distBetweenNodes = 400;
    const levels = 7;

    let canvas: HTMLCanvasElement = document.getElementById("main_canvas") as HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
    let container: HTMLDivElement = document.getElementById("container") as HTMLDivElement;

    var halfX = canvas.width / 2;
    var halfY = canvas.height / 2;
    var mouseX: number = halfX,
        mouseY: number = halfY;
    var startMovement = false;
    var boxOpen: boolean = false;
    var framesWithBoxOpen: number = 0;
    var firstFrame: boolean = true;
    // var lastFrameTs: number = 0;
    // var frameTimeAvg: number = 0;
    var lastMoveSpeed: number = 0;
    // var reducedMotion: boolean = false;

    function centerCoords(x: number, y: number): Position {
        return [
            Math.round(x + halfX),
            Math.round(y + halfY)
        ];
    }

    function drawCrosses(xOffset: number = 0, yOffset: number = 0) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                ctx.save();
                ctx.translate(canvas.width / 4 * j + xOffset, canvas.height / 4 * i + yOffset);
                ctx.beginPath();
                ctx.moveTo(-9, 0);
                ctx.lineTo(9, 0);
                ctx.moveTo(0, -9);
                ctx.lineTo(0, 9);
                ctx.stroke();
                ctx.restore();
            }
        }
    }

    function redraw(ts: DOMHighResTimeStamp) {
        // frameTimeAvg = frameTimeAvg * 0.9 + (ts - lastFrameTs) * 0.1;
        // console.log(frameTimeAvg);
        if (boxOpen) {
            framesWithBoxOpen++;
        } else {
            framesWithBoxOpen = 1;
        }
        if (framesWithBoxOpen >= 20) {
            requestAnimationFrame(redraw);
            return;
        }
        let xOffset = mouseX - canvas.width / 2;
        let yOffset = mouseY - canvas.height / 2;
        let curMouseDist = Math.hypot(xOffset, yOffset);
        // Smooth movement speed by averaging with last frame.
        let moveSpeed = (lastMoveSpeed + Math.min(Math.max((curMouseDist - 100) / 70, 0), 10) / ((framesWithBoxOpen + 2) / 2)) / 2;
        let moveDir = Math.atan2(yOffset, xOffset);

        let curDist = Math.hypot(canvas.width / 2 - halfX, canvas.height / 2 - halfY);
        let dx = -Math.cos(moveDir) * moveSpeed;
        let dy = -Math.sin(moveDir) * moveSpeed;
        let afterDist = Math.hypot(canvas.width / 2 - halfX - dx, canvas.height / 2 - halfY - dy);
        if (afterDist < curDist) {
            halfX += dx;
            halfY += dy;
            (document.querySelectorAll("div.box") as NodeListOf<HTMLDivElement>).forEach((el) => {
                el.style.left = (Number(el.style.left.slice(0, -2)) + dx) + "px";
                el.style.top = (Number(el.style.top.slice(0, -2)) + dy) + "px";
            });
        } else if (afterDist < distBetweenNodes * 0.9 * levels) {
            let scale = (1.1 - afterDist / (distBetweenNodes * 1.0 * levels));
            dx *= scale;
            dy *= scale;
            if (!firstFrame && Math.hypot(dx, dy) < 0.8) {
                requestAnimationFrame(redraw);
                return;
            }
            halfX += dx;
            halfY += dy;
            (document.querySelectorAll("div.box") as NodeListOf<HTMLDivElement>).forEach((el) => {
                el.style.left = (Number(el.style.left.slice(0, -2)) + dx) + "px";
                el.style.top = (Number(el.style.top.slice(0, -2)) + dy) + "px";
            });
        } else if (!firstFrame) {
            requestAnimationFrame(redraw);
            return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCrosses(xOffset * -0.02, yOffset * -0.02);
        drawBoxes(DATA[0]?.children!, 0, 0, DATA[0], [undefined, undefined], undefined, undefined, undefined, 12, 1);
        firstFrame = false;
        lastMoveSpeed = Math.hypot(dx, dy);
        requestAnimationFrame(redraw);
    }

    function resizeCanvas() {
        let oldHalfX = halfX;
        let oldHalfY = halfY;
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        halfX = canvas.width / 2;
        halfY = canvas.height / 2;
        mouseX = halfX;
        mouseY = halfY;
        startMovement = false;
        firstFrame = true;
        (document.querySelectorAll("div.box") as NodeListOf<HTMLDivElement>).forEach((el) => {
            el.style.left = (Number(el.style.left.slice(0, -2)) + halfX - oldHalfX) + "px";
            el.style.top = (Number(el.style.top.slice(0, -2)) + halfY - oldHalfY) + "px";
        });
    }

    function mouseMove(e: MouseEvent) {
        if (startMovement) {
            mouseX = e.x;
            mouseY = e.y;
        } else {
            if (Math.hypot(canvas.width / 2 - e.x, canvas.height / 2 - e.y) < 300) {
                startMovement = true;
                firstFrame = true;
            }
        }
    }

    function expandDescBox(div: HTMLDivElement) {
        boxOpen = true;
        div.style.zIndex = "15";
        let name = div.querySelector("span.name") as HTMLSpanElement;
        name?.classList.remove("collapsed");
        // @ts-expect-error
        name.style.fontSize = null;
        (div.querySelector("span.desc") as HTMLSpanElement).style.display = "inline-block";
    }

    function collapseDescBox(div: HTMLDivElement) {
        boxOpen = false;
        div.style.zIndex = "unset";
        let name = div.querySelector("span.name") as HTMLSpanElement;
        name?.classList.add("collapsed");
        name?.dataset?.fontSize && (name.style.fontSize = name.dataset.fontSize);
        (div.querySelector("span.desc") as HTMLSpanElement).style.display = "none";
    }

    function addDescBox(box: DataBox, x: number, y: number, level: number = 0) {
        let div = document.createElement("div");
        let pos: Position = centerCoords(x, y);
        div.classList.add("box");
        div.onmouseenter = () => {
            expandDescBox(div);
        };
        div.onmouseleave = () => {
            collapseDescBox(div);
        }
        let name = document.createElement("span");
        name.classList.add("name", "collapsed");
        name.dataset.fontSize = Math.max(32 - level * 4, 16) + "px";
        name?.dataset?.fontSize && (name.style.fontSize = name.dataset.fontSize);
        name.innerHTML = box.name.replaceAll(" ", "&nbsp;");
        let desc = document.createElement("span");
        desc.classList.add("desc");
        desc.innerHTML = box?.desc ?? "";
        if (box.path !== undefined) {
            let a = document.createElement("a");
            a.href = box.path.startsWith("/")
                ? window.location.href.substring(0, window.location.href.lastIndexOf("/")) + box.path
                : box.path;
            a.target = box.path.startsWith("/")
                ? "_self"
                : "_blank";
            let tip = document.createElement("span");
            tip.classList.add("tip");
            tip.innerText = "Click for more information";
            desc.append(document.createElement("br"), tip);
            a.append(name, document.createElement("br"), desc);
            div.append(a);
        } else {
            div.append(name, document.createElement("br"), desc);
        }
        div.style.left = pos[0] + "px";
        div.style.top = pos[1] + "px";
        container.append(div);
    }

    function drawBoxes(boxes: DataBox[], startX: number, startY: number, parent: DataBox | undefined, aunts: [DataBox?, DataBox?],
        dist: number = distBetweenNodes, prevAngle?: number, prevBoxAngle?: number,
        lineWidth: number = 2, level: number = 0) {
        let numBoxes = boxes.length;
        ctx.strokeStyle = "black";
        let cousinScaleFac: number = 0.75 + (aunts[0]?.children !== undefined ? 0 : 0.25) + (aunts[1]?.children !== undefined ? 0 : 0.25);
        for (let i = 0; i < numBoxes; i++) {
            ctx.lineWidth = lineWidth;
            let angle: number;
            let thisDist = dist + (i % 2 === 0 ? dist * 0.09 : -dist * 0.09);
            level > 1 && numBoxes > 3 && (thisDist *= 1.4);
            let thisAngle: number;
            if (prevAngle !== undefined && prevBoxAngle) {
                angle = numBoxes > 4
                    ? prevAngle - 1.4 * cousinScaleFac * (prevBoxAngle * 0.5 + 0.12) + (2.8 * cousinScaleFac * (prevBoxAngle * 0.5 + 0.12) / (numBoxes - 1)) * i
                    : numBoxes > 2
                        ? prevAngle - 0.9 * cousinScaleFac * (prevBoxAngle * 0.5 + 0.12) + (1.8 * cousinScaleFac * (prevBoxAngle * 0.5 + 0.12) / (numBoxes - 1)) * i
                        : numBoxes > 1
                            ? prevAngle - 0.5 * cousinScaleFac * (prevBoxAngle * 0.5 + 0.12) + (1 * cousinScaleFac * (prevBoxAngle * 0.5 + 0.12) / (numBoxes - 1)) * i
                            : prevAngle - (boxes[i].name.length % 2 == 0 ? -0.15 : 0.15);
                if (numBoxes > 2) {
                    thisAngle = (1.5 * prevBoxAngle / (numBoxes - 1));
                } else if (numBoxes > 1) {
                    thisAngle = (0.75 * prevBoxAngle / (numBoxes - 1));
                } else {
                    thisAngle = prevBoxAngle * 1.1;
                }
                // if (!(boxes[i - 1]?.children || boxes[i + 1]?.children)) {
                //     thisAngle *= 2;
                // }
                boxes[i]?.children !== undefined && (angle += (Math.sqrt(boxes[i - 1]?.children?.length ?? 0) - Math.sqrt(boxes[i + 1]?.children?.length ?? 0)) * 0.04);
                if ((boxes[i].name === "Physical" || boxes[i].name === "Digital") && parent?.name === "Projects") {
                    angle *= 1.6;
                    angle += 0.3;
                    thisDist *= 1.1;
                    thisAngle *= 1.65;
                }
            } else {
                angle = (2 * Math.PI / numBoxes) * i - Math.PI / numBoxes / 2;
                thisAngle = 2 * Math.PI / numBoxes;
            }
            let pos: Position = [
                Math.cos(angle) * thisDist + startX,
                Math.sin(angle) * thisDist + startY
            ];
            ctx.beginPath();
            ctx.moveTo(...centerCoords(startX, startY));
            ctx.lineTo(...centerCoords(...pos));
            ctx.stroke();
            if (!boxes[i].drawn) {
                addDescBox(boxes[i], ...pos, level);
                boxes[i].drawn = true;
            }
            if (boxes[i]?.children !== undefined) {
                drawBoxes(boxes[i].children!, ...pos, boxes[i], [
                    boxes[i - 1] ?? aunts[0]?.children?.[(aunts[0]?.children?.length ?? 0) - 1],
                    boxes[i + 1] ?? aunts[1]?.children?.[0]
                ], undefined, angle, thisAngle, Math.max(Math.floor(lineWidth * 0.7), 2), level + 1);
            }
        }
    }

    addDescBox(DATA[0], 0, 0);
    window.onresize = resizeCanvas;
    window.addEventListener("mousemove", mouseMove);
    document.getElementById("recenter")!.onclick = resizeCanvas;
    // let reducedMotionBox = document.getElementById("reduced_motion")! as HTMLInputElement;
    // reducedMotionBox.onchange = () => {
    //     if (reducedMotionBox.checked) {
    //         reducedMotion = true;
    //         container.style.overflow = "scroll";
    //         startMovement = false;
    //         resizeCanvas();
    //         ctx.clearRect(0, 0, canvas.width, canvas.height);
    //         drawCrosses();
    //         drawBoxes(DATA[0]?.children!, 0, 0, undefined, undefined, undefined, 12);
    //     } else {
    //         reducedMotion = false;
    //         container.style.overflow = "hidden";
    //         startMovement = false;
    //         resizeCanvas();
    //         redraw();
    //     }
    // };
    resizeCanvas();
    requestAnimationFrame(redraw);
})();
