import {XMarkIcon} from "@heroicons/react/24/solid"

export default function Modal({show, children, close}) {

  if (!show) return null

  return (
    <div className="">
      <div 
        className="h-screen w-screen bg-black opacity-70 z-30 absolute top-0 left-0"
        onClick={close}
      >
        
      </div>
      <div className="bg-black absolute z-40 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-2 rounded-md flex items-start">
        { children }
        <button onClick={close}>
          <XMarkIcon className="h-7 text-gray"/>
        </button>
      </div>
    </div>

  )
}