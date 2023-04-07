import React from 'react'

export default function chatroom() {
  return (
    <div className='flex h-full justify-center'>
      <div className=" flex flex-col justify-between container w-full md:w-[60%] h-[90vh] bg-red-200 border-2 border-black">
        <div className="text-3xl font-bold header h-8 bg-pink-600 text-white flex justify-center items-center p-6">Talk with Stranger</div>
        <div >
            <div className="msg-area">
                <div className='flex justify-start items-center ml-2'>
                    <div className="sender rounded-full w-10 h-10 bg-blue-600 mx-1 text-center">S</div>
                    <div className="msg msg-in">Hello baby</div>
                </div>
                <div className='flex justify-end items-center mr-2'>
                    <div className="msg msg-out">Bol Bsdk</div>
                    <div className="sender rounded-full w-10 h-10 bg-pink-600 mx-1 text-center">S</div>
                </div>
            </div>
            <div className="footer mx-2 mb-3">
                <form>
                    <input type="text" className='w-[90%] rounded-full mr-2 h-full p-2'/>
                    <input type="submit" className='w-auto h-full rounded-md px-3 py-1.5 bg-pink-600 text-white' value='Send'/>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}
