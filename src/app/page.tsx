import Link from 'next/link';

const newsItems = [
  { title: 'New Era Begins!', content: 'The post-Empire roleplay section is now open. Create your characters and forge a new destiny in a galaxy free from Palpatine\'s rule!', date: '07.22.2024' },
  { title: 'Forum Rules Updated', content: 'Please review the updated rules regarding character creation and post length. Your cooperation is appreciated.', date: '07.20.2024' },
  { title: 'Welcome to SWOR.FR!', content: 'A long time ago, in a galaxy far, far away... a new community is born. Welcome to all new members!', date: '07.15.2024' },
];

export default function PortalPage() {
  return (
    <div className="space-y-12">
      <div className="text-center p-8 bg-gray-900/50 border border-yellow-600/50 rounded-lg shadow-xl shadow-yellow-600/10">
        <h1 className="text-5xl font-bold text-yellow-400 font-cinzel mb-4">Welcome to Star Wars: Online Roleplay</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Forge your destiny in the galaxy. Whether you are a noble Jedi, a cunning Sith, a daring smuggler, or a loyal soldier, your adventure begins here.
        </p>
        <div className="mt-8">
          <Link href="/forum" className="inline-block bg-yellow-500 text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-400 transition-transform duration-300 hover:scale-105">
            Enter the HoloNet Forum
          </Link>
        </div>
      </div>

      <div className="bg-gray-950 p-6 rounded-lg border border-yellow-800/30">
        <h2 className="text-3xl font-cinzel text-yellow-500 border-b-2 border-yellow-700/50 pb-3 mb-6">Latest Transmissions</h2>
        <div className="space-y-6">
          {newsItems.map((item) => (
            <div key={item.title} className="bg-black/30 p-4 rounded-md border-l-4 border-yellow-600">
              <h3 className="text-xl font-bold text-gray-100">{item.title}</h3>
              <p className="text-gray-400 mt-1">{item.content}</p>
              <p className="text-sm text-yellow-500/70 mt-3 text-right">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

