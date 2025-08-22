import { OurTalent } from "@/components/music/our-talent";
import { About2ttee } from "@/components/music/about-2ttee";
import { MUSIC_ICONS, SOCIAL_ICONS } from "@/constants";
import { TelepseInstagram } from "@/components/music/telepse-instagram";
import { MusicBanner } from "@/components/music/music-banner";
import { TelepseTV } from "@/components/music/telepse-tv";
import { TelepseYoutube } from "@/components/music/telepse-youtube";

export default function MusicPage() {
  return (
    <section className="flex flex-col gap-8">
      <MusicBanner />

      <OurTalent />

      <About2ttee
        bio={[
          "Oladeji Taiwo Olusola Jamil (born May 21, 1993) better known by his stage name 2TTEE is a Nigerian Afro/Hip-hop recording artist, record producer, photomodel and entrepreneur. The Ibadan city raised artist is also an entrepreneur through his company, Telepse -a talent management, media marketing and brand consulting firm.",
          "His musical career began in 2010 with his debut single -Sexy Lady which received good airplay in Ibadan City. He later moved to Lagos in 2011 to pursue his music career and education. The artiste holds a B.Sc. Degree in Geography, University of Lagos, 2016.",
          "In 2012, as a rapper, he was among the 32 finalists of I’ve Got Talent, a talent hunt reality television show which was aired to millions nation wide and international for a 7 Million naira winners’ prize through voting.",
          "2TTEE already released a debut EP album titled Handsome Ransome (2012) with a follow up EP album -TomTom (2013). His tour in Lagos city and Tomtom music video (2014), made him even more known with an expanded fan base. 2TTEE released his second music video -Yung Nas in 2015.",
        ]}
        musicPlatforms={MUSIC_ICONS}
        watchLive="https://www.youtube.com/embed/RX738gR2QsQ"
        bookingEmail="book2ttee@telepse.com"
        latestProject={`Ibadan Ep Album by 2ttee is the latest project by the music artist released 1st April, 2018. Listen on <a href="https://itunes.apple.com/us/album/ibadan-ep/1360885598?app=music&ign-mpt=uo%3D4" style="text-decoration:underline">Apple Music</a>. Listen on <a href="https://open.spotify.com/album/6aaWK9CAcw300SUfb9jrQe?fo=1" style="text-decoration:underline">Spotify</a>`}
        socialPlatforms={SOCIAL_ICONS}
      />

      <TelepseTV />

      <TelepseYoutube />

      <TelepseInstagram />
    </section>
  );
}
