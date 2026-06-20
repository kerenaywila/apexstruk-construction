import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import ProjectsView from './components/ProjectsView';
import ProfileView from './components/ProfileView';
import ContactView from './components/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView 
            setActiveTab={setActiveTab} 
            setSelectedProjectId={setSelectedProjectId} 
          />
        );
      case 'services':
        return <ServicesView />;
      case 'projects':
        return (
          <ProjectsView 
            selectedProjectId={selectedProjectId} 
            setSelectedProjectId={setSelectedProjectId} 
          />
        );
      case 'profile':
        return <ProfileView />;
      case 'contact':
        return <ContactView />;
      default:
        return (
          <HomeView 
            setActiveTab={setActiveTab} 
            setSelectedProjectId={setSelectedProjectId} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-[#F97316] selection:text-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow">
        {renderActiveView()}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
