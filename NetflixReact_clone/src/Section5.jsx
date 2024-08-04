import Faq from "./components/Faq.jsx";
import './App.css'
import Inputbox from "./components/Inputbox.jsx";

export default function Section5() {
  const faqs = [{
    que: "What is Netflix?",
    ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
  },
  {
    que:"How Much Does Netflix Cost?",
    ans:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
  },
  {
    que:"Where Can i Watch?",
    ans:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    que:"How Do i Cancel?",
    ans:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    que:"What can i watch on Netflix?",
    ans:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
  },
  {
    que:"Is Netflix good for Kids?",
    ans:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don\’t want kids to see."
  }

]
  return (
    <>
      <div className="bg-black text-white border-t-8 border-b-8 border-[#2c2c2c] flex flex-col items-center">
        <h1 className="text-5xl font-extrabold p-[4rem]">Frequently Asked Questions</h1>
        {faqs.map(faq => <Faq faq={faq}/>)}
        <h3 className="text-xl m-[20px]">Ready to watch? Enter your email to create or restart your membership.</h3>
        <Inputbox/>
        <span className="p-[50px]"></span>
      </div>
    </>
  )
}
