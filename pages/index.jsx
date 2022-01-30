import { validateEmail } from '../utils/validation'
import { useState } from 'react'
const Home = () => {
  const [email, setEmail] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmit = () => {
    if (validateEmail(email)) {
      console.log(email)
    } else {
      alert('Invalid email')
    }
  }
  return (
    <>
      <nav class="flex flex-wrap items-center justify-center bg-blue-500 p-6">
        <div class="text-[#fff]">
          <span class="text-xl font-semibold tracking-tight">
            Linkedin URL Locator
          </span>
        </div>
      </nav>
      <div className="mx-auto my-20 flex max-w-3xl flex-col px-8">
        <div class="flex flex-col gap-4">
          <label for="email" class="text-lg leading-7 text-gray-600">
            Enter Email to get Linkedin URL
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            class="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            class="my-4 w-72 rounded border-0 bg-blue-500 py-2 px-8 text-lg text-white hover:bg-blue-600 focus:outline-none"
          >
            Get Linkedin URL
          </button>
        </div>
      </div>
      <div className='max-w-3xl mx-auto px-8'>
        <div class="flex flex-col gap-4">
          <label for="url" class="text-2xl leading-7 text-gray-600">
            Linkedin URL
          </label>
          <input
            type="text"
            id="url"
            name="url"
            value={url}
            class="w-full h-20 rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
          />
        </div>
      </div>
    </>
  )
}
export default Home
