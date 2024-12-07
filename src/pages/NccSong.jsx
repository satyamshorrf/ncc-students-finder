import React, { useState, useRef } from 'react';
import PageLayout from '../components/PageLayout';
import { Play, Pause, Volume2 } from 'lucide-react';

const NccSong = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <PageLayout title="NCC SONG">
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">HISTORY OF NCC SONG</h2>
          
          {/* Audio Player */}
          <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-lg">
            <button 
              onClick={togglePlay}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                {Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, '0')}
              </span>
              <div className="w-48 h-1 bg-gray-300 rounded-full">
                <div 
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${(currentTime / audioRef.current?.duration || 0) * 100}%` }}
                />
              </div>
              <Volume2 size={20} className="text-gray-600" />
            </div>

            <audio
              ref={audioRef}
              onTimeUpdate={handleTimeUpdate}
              src="/ncc-song.mp3"
            />
          </div>
        </div>

        {/* Song History Content */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The desirability of composing a NCC song was considered in the Circle Commanders (now called DDGs) Conference held in January 1956 and all circles were asked to send their proposals. The official song of the NCC – "Kadam Mila Ke Chal" was adopted in 1962, and registered in 1969 with the approval of the Ministry of Defence.
          </p>

          <p>
            In 1974, it was felt that the NCC song had failed to catch the imagination of the youth, and there was a need for a change. A sustained process began; entries were invited from Directorates for suitable lyrics. 107 entries were received; of which eight were selected by a Board of Officers. However, all the eight were considered sub standard by Dr Nagendra of Delhi University, who was the judge. On the suggestion of Dr Nagendra, the task was entrusted to Shri Chiranjit, the Chief Producer, Drama Division, AIR, Delhi.
          </p>

          <p>
            The song written by Shri Chiranjit was approved in 1976. The Maharashtra Directorate was asked to get the song composed and recorded with the help of Shri Raj Kapoor, and the Films Division, Bombay. However, nothing much came out of this exercise as Shri Raj Kapoor was then busy in making his film "Satyam Shivam Sundaram" and the facilities of the Films Division were under renovation. Later, Shri Mahinder Singh Bedi, a well known poet of Delhi, was requested to write another song. This effort also proved infructuous. AEC Centre Pachmarhi was also approached, but somehow the matter could not be finalised.
          </p>

          <p>
            Almost during the same period and independent of efforts at Directorate General NCC, the Film Division undertook production of a documentary on NCC 'A Cadet' s Diary'. The Director of the documentary was looking for a suitable song for the film. He happened to hear the song – "Ham Sab Hindi Hain" which appears to have been first sung at a Youth Festival at Chandigarh, sometime during 1968-69, and introduced it in the documentary film.
          </p>

          <p>
            The song was a hit and successive Director Generals (DGs) found it good and played it repeatedly in Republic Day camps. In 1980, the word 'Hindi' was substituted with 'Bhartiya'.
          </p>

          <p>
            Come ASIAD (1982), and the NCC got the opportunity to display its potential in the opening ceremony. The Special Organising Committee approved trial recording of the song for recital during the Asian Games Festival. The song was finally recorded in its present form, sometime during Oct 1982, at the Western Outdoor Studio, Delhi with the help of AIR artists, and musicians under overall supervision of Pandit Vijai Raghavan Rao.
          </p>

          <p>
            Post ASIAD era in the NCC saw among other events, a well composed musical hit and an inspiring NCC song being played and sung alongwith recorded music; a 16 mm colour film had also been made with title 'Hum Sab Bhartiya Hain' of 7½ minutes duration. This film had been telecast twice on national hook up. Other films, 'Unity and Discipline': 'A Cadet' s Diary, had also used this song prominently. The writer of this song seems to have been lost in oblivion. "No body knows" – said Shri SK Sharma, Joint Director, Armed Forces Film and Photo Division, who was actively involved with the production of documentaries on the NCC. "This song was not written for the NCC, as such, writes Shri Mathur, ex- publicity officer, DGNCC, in his notings on the file. But nobody has claimed it so far. Another noting speaks of Sri Virender Sharma as the lyrics writer, and Sri Vijai Raghavan Rao as the music composer.
          </p>

          <p>
            This NCC song is liked by millions of cadets, both past and present, and is sung on all important occasions of the NCC.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default NccSong;
