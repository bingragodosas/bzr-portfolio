import { useState, useEffect } from 'react';
import { getProjects } from '../services/projectsService';

import dumasafeImg from '../assets/dumasafe.png';
import foodpandaImg from '../assets/foodpanda.png';
import taskmanagerImg from '../assets/taskmanager.png';
import portfolioImg from '../assets/portfolio-v1.png';

const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: 'DumaSafe Guide',
    description:
      'An emergency response portal for Dumaguete City featuring real-time coordination and life-saving safety resources for the City of Gentle People.',
    tech_stack: ['React', 'Leaflet.js', 'TypeScript', 'CSS'],
    live_url: 'https://dumasafeguide-free-nf.netlify.app/',
    github_url: null,
    image_url: dumasafeImg,
    featured: true,
  },
  {
    id: 2,
    title: 'Foodpanda Clone',
    description:
      'A Foodpanda-inspired food delivery project demonstrating read functions and task-based architecture.',
    tech_stack: ['React', 'Netlify'],
    live_url: 'https://ragodo-read-function-task.netlify.app/',
    github_url: null,
    image_url: foodpandaImg,
    featured: false,
  },
  {
    id: 3,
    title: 'Supabase Task Manager',
    description:
      'A full-featured task management app built with Supabase — create, update, and track tasks with real-time database sync.',
    tech_stack: ['React', 'Supabase', 'Netlify'],
    live_url: 'https://benive-ragodo-my-supabase-taskmanager.netlify.app/',
    github_url: null,
    image_url: taskmanagerImg,
    featured: true,
  },
  {
    id: 4,
    title: 'Portfolio v1',
    description:
      'My first portfolio website showcasing Figma web designs, a Sibulan local government page, an Asian College library system, and a mobile library management app.',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    live_url: 'https://bzr-websiteproject1.netlify.app/',
    github_url: null,
    image_url: portfolioImg,
    featured: false,
  },
];

const IMAGE_MAP = {
  'DumaSafe': dumasafeImg,
  'Foodpanda': foodpandaImg,
  'Task Manager': taskmanagerImg,
  'Portfolio v1': portfolioImg,
};

const EXCLUDED_TITLES = ['image & video', 'image and video'];

function getImageForProject(proj) {
  if (proj.image_url) return proj.image_url;
  const match = Object.keys(IMAGE_MAP).find(key =>
    proj.title?.toLowerCase().includes(key.toLowerCase())
  );
  return match ? IMAGE_MAP[match] : null;
}

export function useProjects() {
  const [projects, setProjects]           = useState([]);
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const data = await getProjects();
        if (!cancelled) {
          if (data.length > 0) {
            const withImages = data
              .filter(proj => !EXCLUDED_TITLES.some(ex =>
                proj.title?.toLowerCase().includes(ex)
              ))
              .map(proj => ({
                ...proj,
                image_url: getImageForProject(proj),
              }));
            setProjects(withImages);
            setUsingFallback(false);
          } else {
            setProjects(FALLBACK_PROJECTS);
            setUsingFallback(true);
          }
        }
      } catch (err) {
        if (!cancelled) {
          setProjects(FALLBACK_PROJECTS);
          setUsingFallback(true);
          setError(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();
    return () => { cancelled = true; };
  }, []);

  return { projects, loading, error, usingFallback };
}