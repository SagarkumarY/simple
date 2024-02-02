import React from 'react'

function Contact() {
  return (
    <div className="container_contact h-[100vh] flex items-center justify-evenly">
        <form action=' text-[] ' className='contact_left
         flex flex-col items-start gap-5'>
           <div className="contact_left_title">
            <h2 className=' flex text-gray-500 text-[40px] m-1 '>Get in Touch</h2>
            < hr className='h-1 w-28 border-none ' />
           </div>
           <input type="text" name='name' className=' w-[400]px h-[50px] border-none outline-none'  placeholder='Enter name ' required />
           <input type="email" name='email' className='' placeholder='Enter name ' required />
           <testarea name='message' placeholder='Enter your message' required />
           <button type='submit' className=''>submit</button>
        </form>

        <div className="contact_right">
         <img className='w-20' src="https://rare-gallery.com/livewalls/imgpreview/144840-anime-girl-with-cat-looking-towards-sunset.jpg" alt="anime" />
        </div>
    </div>
  )
}

export default Contact