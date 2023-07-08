import React from 'react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

function Emoji({handleInput}) {
    
  return (
    <div>
      <Picker data={data} emojiSize={15} emojiButtonSize={30} onEmojiSelect={handleInput} maxFrequentRows={0}/>
    </div>
  )
}


export default Emoji
