import React from 'react';
import { 
  SiReact, SiNextdotjs, SiCplusplus, SiFigma, SiNodedotjs, SiTailwindcss,
  SiJavascript, SiGraphql, SiRedux, SiTypescript, SiMongodb, SiGithub,
  SiHtml5, SiDjango, SiPython, SiFirebase, SiDocker, SiPostgresql,
  SiSupabase, SiPostman, SiFlask, SiLangchain, SiHuggingface, SiGooglecloud
} from 'react-icons/si';

interface StackIconProps {
  name: string;
}

export const StackIcon: React.FC<StackIconProps> = ({ name }) => {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'react': return <SiReact />;
      case 'nextjs': return <SiNextdotjs />;
      case 'c++': return <SiCplusplus />;
      case 'figma': return <SiFigma />;
      case 'nodejs': return <SiNodedotjs />;
      case 'tailwindcss': return <SiTailwindcss />;
      case 'js': return <SiJavascript />;
      case 'graphql': return <SiGraphql />;
      case 'redux': return <SiRedux />;
      case 'typescript': return <SiTypescript />;
      case 'mongodb': return <SiMongodb />;
      case 'github': return <SiGithub />;
      case 'html5': return <SiHtml5 />;
      case 'django': return <SiDjango />;
      case 'python': return <SiPython />;
      case 'firebase': return <SiFirebase />;
      case 'docker': return <SiDocker />;
      case 'postgresql': return <SiPostgresql />;
      case 'supabase': return <SiSupabase />;
      case 'postman': return <SiPostman />;
      case 'flask': return <SiFlask />;
      case 'langchain': return <SiLangchain />;
      case 'huggingface': return <SiHuggingface />;
      case 'gcloud': return <SiGooglecloud />;
      default: return <div>{iconName.toUpperCase()}</div>;
    }
  };

  return (
    <div className="skill-logo">
      {getIcon(name)}
    </div>
  );
};
