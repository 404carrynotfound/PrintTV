# PrintTV - IPTV Application

OdinSmurfs is an IPTV application built on ReactJS and NodeJS. It's purpose is to provide IPTV to everyone. The application also provides admin functionality where everything can be easily maganged.

The application has three levels of accessibility: guest user, administrator and registered user

## Routes
| Route  | Description | Access Level |
| ------------- | ------------- | ------------- |
| /  | Home page  | Guests only |
| /login  | Login page  | Guests only |
| /register  | Register page  | Guests only |
| /support  | Support page  | All Users |
| /player  | Player Page  | Registered only |
| /admin/channels  | All channels  | Administrator |
| /admin/tickets | All tickets  | Administrator |

## Usage

**Home page**

route: '/'

Just a welcome page.

**Login page**

route: '/login'

A login page, nothing special.

**Register page**

route: '/register'

A register page.

**Support**

route: '/support'

A page with support form about our services.

**Player**

route: '/player'

A page with channels and player.

**Channels**

route: '/admin/channels'

A page where only admin see all channels, he can add more and remove.

**Tickets**

route: '/admin/tickets'

A page where only admin see all submited tickets, he can remove.

## Demo Account

http://tv-print.herokuapp.com/

email: peter@abv.bg

password: 123456
