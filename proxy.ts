import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = [
'https://www.amazon.com/Recognition-Real-Time-Weatherproof-Effortless-Birdwatching/dp/B0DSDFV4Z2?th=1&linkCode=ll2&tag=birdcamly-20&linkId=6b4adb10d031f9fc7d1678cc8d461b25&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/HEAPETS-Recognition-Notifications-Weatherproof-Watchers/dp/B0G4MH28MY?th=1&linkCode=ll2&tag=birdcamly-20&linkId=59c163aa333c3bfd5501419d5ea16c7f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/HARYMOR-Identify-Species-Watching-Capture/dp/B0C4Y6D5BD?th=1&linkCode=ll2&tag=birdcamly-20&linkId=31801250778265635c40d03ff824ae3a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Kiwibit-BeakoTM-Subscription-Powered-Outdoors/dp/B0DZHNNP25?th=1&linkCode=ll2&tag=birdcamly-20&linkId=1408160c8a23bf23db964afa42c20562&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/NETVUE-Wireless-Wildbird-Auto-Capture-Subscription/dp/B0B56BFH7P?th=1&linkCode=ll2&tag=birdcamly-20&linkId=83ad0e412dd7a0ccfb74049d8c4fbe1c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Kiwibit-Identification-Livestream-Real-Time-Birdwatching/dp/B0DZHNDJQM?th=1&linkCode=ll2&tag=birdcamly-20&linkId=97bc8310ee494f32620c2380964ad98b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Kiwibit-BeakoTM-Feeder-Camera-Outdoors/dp/B0FHW2TCRX?th=1&linkCode=ll2&tag=birdcamly-20&linkId=d90645798d2bd5d4cce687fa281d6788&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Binoculars-Waterproof-Binocular-Traveling-Sightseeing/dp/B0756BXDTX?&linkCode=ll2&tag=birdcamly-20&linkId=6faae53e5e267c89a3411da1e7387444&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Binoculars-Waterproof-Watching-Football-Stargazing/dp/B0CJRTRRTG?th=1&linkCode=ll2&tag=birdcamly-20&linkId=9eb6ee1e8182c7c3ef6ce20d9cda0385&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Binoculars-Compact-Watching-Theater-Concerts/dp/B07Q1GHB5X?th=1&linkCode=ll2&tag=birdcamly-20&linkId=6d37f562af00b6fa3d8dcaa4e8dc2d97&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Tinllaans-Binoculars-Waterproof-Lightweight-Watching/dp/B0DPHHG48X?th=1&linkCode=ll2&tag=birdcamly-20&linkId=a763e72f7827f5736fb1899d0d8eb19a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/POLDR-Binoculars-Compact-Watching-Concert/dp/B07GQ8J4QX?th=1&linkCode=ll2&tag=birdcamly-20&linkId=966b485e93e7b580c219cb2b64b4c56b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Binoculars-Adults-Powered-Upgraded-Adapter/dp/B0CG9XF3FR?&linkCode=ll2&tag=birdcamly-20&linkId=d3d346b4c7dcc6ab7e4d0b43306ad456&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Aurosports-Folding-Binoculars-Watching-Concerts/dp/B06XT7M6P5?th=1&linkCode=ll2&tag=birdcamly-20&linkId=6dc8c37a3e0ee3626257301ae6e056b4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Squirrel-Proof-Bird-Feeder-Feeding/dp/B0FN67ZL4P?th=1&linkCode=ll2&tag=birdcamly-20&linkId=1d231dc269f7b464688c9a14a4388f5f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/FEED-GARDEN-Outdoors-Squirrel-Chew-Proof/dp/B0D7GKMVJY?th=1&linkCode=ll2&tag=birdcamly-20&linkId=6629f0e9215249ed9841b79f365b5bce&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Squirrel-Outdoors-Protection-Cardinal-Chickadee/dp/B0CJ96ZKG2?&linkCode=ll2&tag=birdcamly-20&linkId=52c8d6aa70d23eb72716d75bba868955&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Outdoors-Squirrel-Adjustable-Chew-Proof-Resistant/dp/B07JBL8P6Q?th=1&linkCode=ll2&tag=birdcamly-20&linkId=16ccdbb08b4d84d15915bb942c77ae6e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Wildpark-Squirrel-Cardinals-Chickadees-Feeders-One/dp/B0DSDW5XP5?th=1&linkCode=ll2&tag=birdcamly-20&linkId=73fbe9831a2a13e8eb1a0cc97ba4de73&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Perky-Pet-Squirrel-Be-Gone-Wild-Bird-Feeder/dp/B000SP2JLU?th=1&linkCode=ll2&tag=birdcamly-20&linkId=42bf09636902173d8178a575eeacbc62&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Gbekery-Squirrel-Bilateral-Weight-Activated-Decoration/dp/B0FJ1ZQKWC?th=1&linkCode=ll2&tag=birdcamly-20&linkId=d5648aa4dc9b166a608846a320c19086&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/LUJII-Hummingbird-Outdoor-Hanging-Leak-Resistant/dp/B0GX23XHRF?th=1&linkCode=ll2&tag=birdcamly-20&linkId=71927ce0e142710396064b12c7581016&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Hummingbird-Wireless-Outdoors-Watching-Detection/dp/B0CTQXYWJF?th=1&linkCode=ll2&tag=birdcamly-20&linkId=d24c4ceeb1656d59136ef4bb0770dc81&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/LUJII-Hummingbird-Outdoor-Hanging-Leak-Resistant/dp/B0GX1J1FBH?th=1&linkCode=ll2&tag=birdcamly-20&linkId=e423d1eff35d9308d0fc54411648729e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bird-Feeder-Camera-Solar-Powered/dp/B0D6BRM4HK?th=1&linkCode=ll2&tag=birdcamly-20&linkId=4d184c162abd5460987b165090002e49&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Birdfy-Hummingbird-Feeder-Notification-Outdoors/dp/B0DQXSVNZL?th=1&linkCode=ll2&tag=birdcamly-20&linkId=38c9c4b8bbd1d7b367c1f970adda66a8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Hummingbird-Solar-Powered-Identify-Protection-Outdoors/dp/B0CTH4JSYF?th=1&linkCode=ll2&tag=birdcamly-20&linkId=9a8cda220a072d2c01a3c2beef031560&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TT-Nature-Hummingbird-Notification-Compatible/dp/B0FDGNPWV7?th=1&linkCode=ll2&tag=birdcamly-20&linkId=47594c63c05769547c110883cec3eca0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/VIVOHOME-Polyresin-Lightweight-Antique-Outdoor/dp/B07597XGSN?th=1&linkCode=ll2&tag=birdcamly-20&linkId=6ef6222587505149c3f40730d8516d3f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Daoeny-Bird-Freestanding-Birdfeeder-Baths/dp/B0CZ63PY86?th=1&linkCode=ll2&tag=birdcamly-20&linkId=6974006b67f0846b577e5e67abcaff2b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Best-Choice-Products-Outdoor-Pedestal/dp/B01HC76V9C?th=1&linkCode=ll2&tag=birdcamly-20&linkId=759bbbe07a0f6341427a246eb360c761&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/VIVOHOME-Polyresin-Antique-Outdoor-Fountain/dp/B07K1WY1M4?th=1&linkCode=ll2&tag=birdcamly-20&linkId=a3bccae358e028b329fb21481768a9fc&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/OUISJYER-Outdoors-Removable-Upgrades-Birdbaths/dp/B0DTF88PR9?th=1&linkCode=ll2&tag=birdcamly-20&linkId=d62629ee65c785b62c0cd7641456fea7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Best-Choice-Products-Lighted-Birdbath/dp/B0787S6M9K?th=1&linkCode=ll2&tag=birdcamly-20&linkId=30d8f33d4d226e81b15acd1ab05a1f20&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Gtongoko-Bird-Bath-for-Outside/dp/B0DQCPDR6B?th=1&linkCode=ll2&tag=birdcamly-20&linkId=b4178888240ecfc2a403dc18966a8ae0&language=en_US&ref_=as_li_ss_tl',
]



export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'birdcam'


   // Если зашли на / и есть кука
  if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName)

    if (redirectFlag) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)]
      //проверить url.search и удалить все параметры, оставить только utm_source
      const params = new URLSearchParams(url.search)
      const utmSource = params.get('utm_source')
      url.search = utmSource ? `?utm_source=${utmSource}` : ''


      // передавай в редирект URL и query параметры
      const response = NextResponse.redirect(randomUrl)

      // удаляем cookie
      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      })

      return response
    }
  }

  return NextResponse.next()
}


// применяем middleware только к /
export const config = {
  matcher: ['/'],
}

