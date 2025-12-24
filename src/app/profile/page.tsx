const user = {
  name: 'Tak Castel',
  title: 'Veteran Roleplayer',
  joined: '07.15.2024',
  posts: 156,
  faction: 'Independent',
  avatar: 'https://picsum.photos/seed/takcastel/128/128',
  signature: '<p><em>"No reward is worth this."</em> - Han Solo</p>'
};

const characters = [
  { name: 'Dax Valen', class: 'Smuggler / Scoundrel', era: 'Civil War' },
  { name: 'Kaelen Voss', class: 'Exiled Jedi', era: 'Post-Empire' },
  { name: 'CT-7742 "Flash"', class: 'Clone Trooper', era: 'Clone Wars' }
];

export default function ProfilePage() {
  return (
    <div className="bg-gray-950/70 p-8 rounded-lg border border-yellow-800/30">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        <div className="flex-shrink-0 text-center">
          <img src={user.avatar} alt="User Avatar" className="w-32 h-32 rounded-full border-4 border-yellow-500 mx-auto" />
          <h1 className="text-3xl font-cinzel text-yellow-400 mt-4">{user.name}</h1>
          <p className="text-yellow-500/80">{user.title}</p>
        </div>
        <div className="flex-grow mt-6 md:mt-0 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
            <div className="bg-black/20 p-3 rounded-md">
              <span className="font-bold text-gray-400">Joined:</span> {user.joined}
            </div>
            <div className="bg-black/20 p-3 rounded-md">
              <span className="font-bold text-gray-400">Total Posts:</span> {user.posts}
            </div>
            <div className="bg-black/20 p-3 rounded-md">
              <span className="font-bold text-gray-400">Main Faction:</span> {user.faction}
            </div>
          </div>

          <div className="mt-6 border-t border-gray-800 pt-4">
            <h3 className="font-bold text-yellow-500">Signature:</h3>
            <div 
              className="mt-2 p-3 bg-black/20 rounded-md italic text-gray-400"
              dangerouslySetInnerHTML={{ __html: user.signature }}
            />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t-2 border-yellow-700/50 pt-6">
        <h2 className="text-2xl font-cinzel text-yellow-400 mb-4">Registered Characters</h2>
        <div className="space-y-3">
          {characters.map((char) => (
            <div key={char.name} className="bg-black/30 p-4 rounded-md flex justify-between items-center">
              <div>
                <p className="text-xl font-bold text-gray-200">{char.name}</p>
                <p className="text-sm text-gray-400">{char.class}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-yellow-500">{char.era}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

