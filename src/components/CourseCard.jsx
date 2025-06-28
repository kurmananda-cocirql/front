


const CourseCard = ({ course }) => {
  const handleClick = () => {
    if (course.redirectUrl) {
      window.location.href = course.redirectUrl;
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-amber-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200 hover:border-amber-300 cursor-pointer flex flex-col h-full"
    >
      
      <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>


      <div className="p-3 flex flex-col flex-grow">
        
        <h3 className="font-bold text-base sm:text-lg text-amber-900 mb-1 line-clamp-2 sm:line-clamp-1">
          {course.title}
        </h3>
        
        
        <p className="text-amber-700 text-xs sm:text-sm mb-2 line-clamp-2">
          {course.category}
        </p>


        <div className="mt-auto">
          {course.rating ? (
            <div className="flex justify-between items-center space-x-2">
              <span className="text-amber-600 font-bold text-sm sm:text-base">
                {course.rating}
              </span>
              <span className="text-amber-700 text-xs sm:text-xs truncate">
                {course.students}
              </span>
            </div>
          ) : (
            <div className="h-4 sm:h-6"></div> 
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;