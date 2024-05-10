export default function UIPositionFixed({ children }) {
    return (
        <div className='navbar-wrapper'>
        <nav className='fixed top-0 left-0 w-full z-50 flex justify-center bg-white shadow-lg'>
          {children}
        </nav>
      </div>
    );
  }