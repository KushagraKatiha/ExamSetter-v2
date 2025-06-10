import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import TeacherManagement from '../components/admin/TeacherManagement';
import SubjectManagement from '../components/admin/SubjectManagement';
import MappingManagement from '../components/admin/MappingManagement';
import { useNavigate } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function AdminPortal() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Portal</h1>
          <p className="text-gray-300">
            Manage teachers, subjects, and their mappings
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-6">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex space-x-1 rounded-xl bg-gray-700 p-1">
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-3 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                  )
                }
              >
                Teachers
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-3 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                  )
                }
              >
                Subjects
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-3 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                  )
                }
              >
                Mappings
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-6">
              <Tab.Panel>
                <TeacherManagement />
              </Tab.Panel>
              <Tab.Panel>
                <SubjectManagement />
              </Tab.Panel>
              <Tab.Panel>
                <MappingManagement />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

export default AdminPortal; 