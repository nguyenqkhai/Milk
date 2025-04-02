export const headerClass = {
  header:
    'bg-white px-4 sm:px-6 lg:px-8 fixed top-0 left-0 w-full z-50 transition-all duration-300',
  nav: 'text-gray-700 font-medium text-base relative hover:text-blue-600 transition duration-200 after:content-[""] after:absolute after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full',
  button:
    'cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2.5 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition duration-300 hover:from-blue-600 hover:to-blue-800',
}

// Constants for Product page
export const productPageConfig = {
  gridClasses:
    'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  cardClasses:
    'flex h-full flex-col overflow-hidden rounded-xl bg-white shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
  imageClasses:
    'h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105',
  titleClasses:
    'mb-2 line-clamp-2 text-base font-semibold text-gray-800 group-hover:text-blue-600',
  priceClasses: 'text-lg font-bold text-gray-900',
  buttonClasses:
    'w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:from-blue-600 hover:to-blue-700 active:scale-95',
}
