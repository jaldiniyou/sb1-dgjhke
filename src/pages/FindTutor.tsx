import React from 'react';
import SearchFilters from '../components/SearchFilters';
import TutorCard from '../components/TutorCard';

const MOCK_TUTORS = [
  {
    id: '1',
    name: 'Marie Dubois',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subjects: ['Mathématiques', 'Physique'],
    rating: 4.9,
    reviewCount: 128,
    hourlyRate: 25,
    languages: ['Français', 'Anglais'],
    description: 'Professeure agrégée de mathématiques avec 8 ans d\'expérience. Spécialisée dans la préparation aux examens et concours.',
  },
  {
    id: '2',
    name: 'Thomas Martin',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subjects: ['Français', 'Histoire', 'Philosophie'],
    rating: 4.8,
    reviewCount: 89,
    hourlyRate: 30,
    languages: ['Français', 'Espagnol'],
    description: 'Docteur en lettres modernes, j\'accompagne les élèves dans leur progression en français et en culture générale.',
  },
  {
    id: '3',
    name: 'Sophie Bernard',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subjects: ['Anglais', 'Allemand'],
    rating: 4.7,
    reviewCount: 56,
    hourlyRate: 28,
    languages: ['Français', 'Anglais', 'Allemand'],
    description: 'Professeure certifiée en langues vivantes, je propose des cours ludiques et efficaces pour progresser rapidement.',
  },
];

export default function FindTutor() {
  const handleSearch = (filters: any) => {
    console.log('Search filters:', filters);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="md:w-80">
            <SearchFilters onSearch={handleSearch} />
          </div>

          {/* Main content */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Tuteurs disponibles</h1>
              <p className="mt-1 text-sm text-gray-500">
                {MOCK_TUTORS.length} tuteurs correspondent à vos critères
              </p>
            </div>

            <div className="space-y-6">
              {MOCK_TUTORS.map((tutor) => (
                <TutorCard key={tutor.id} tutor={tutor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}