import React from 'react';

export default function CourseCard({ course, isFavorite, onToggleFavorite, onAccess, viewMode }) {
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col group h-full"
      style={{ display: 'flex', flexDirection: viewMode === 'list' ? 'row' : 'column' }}
    >
      <div 
        className="relative overflow-hidden bg-gray-100"
        style={{ width: viewMode === 'list' ? '240px' : '100%', flexShrink: 0, aspectRatio: viewMode === 'list' ? 'auto' : '16/9' }}
      >
        <img 
          src={course.img} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        {/* Camada sutil para destacar texto se necessário, mas mantida invisível por padrão para clean look */}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>
          <button 
            onClick={() => onToggleFavorite(course.id)} 
            className="focus:outline-none transform active:scale-90 transition bg-transparent border-none p-1"
          >
            <i className={`text-xl ${isFavorite ? 'fa-solid text-rose-500' : 'fa-regular text-gray-300 hover:text-rose-400'}`}></i>
          </button>
        </div>

        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded uppercase tracking-wide">
            {course.specialty}
          </span>
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
            • {course.category}
          </span>
        </div>

        <p className="text-sm text-slate-500 mb-6 flex items-center gap-1">
          <i className="fa-solid fa-user-doctor text-slate-300"></i> {course.teacher}
        </p>

        <button 
          onClick={() => onAccess(course)}
          className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all shadow-sm hover:shadow active:scale-95 text-sm"
        >
          Acessar Conteúdo
        </button>
      </div>
    </div>
  );
}