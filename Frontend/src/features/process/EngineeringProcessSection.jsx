import { Calendar, FileText, Code, User, Clock } from 'lucide-react';
import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import RadialOrbitalTimeline from '../../components/ui/RadialOrbitalTimeline';

const timelineData = [
  {
    id: 1,
    title: 'Planning',
    date: 'Jan 2024',
    content: 'Project planning and requirements gathering phase.',
    icon: Calendar,
    relatedIds: [2],
    status: 'completed',
    energy: 100,
  },
  {
    id: 2,
    title: 'Design',
    date: 'Feb 2024',
    content: 'UI/UX design and system architecture.',
    icon: FileText,
    relatedIds: [1, 3],
    status: 'completed',
    energy: 90,
  },
  {
    id: 3,
    title: 'Development',
    date: 'Mar 2024',
    content: 'Core features implementation and testing.',
    icon: Code,
    relatedIds: [2, 4],
    status: 'in-progress',
    energy: 60,
  },
  {
    id: 4,
    title: 'Testing',
    date: 'Apr 2024',
    content: 'User testing and bug fixes.',
    icon: User,
    relatedIds: [3, 5],
    status: 'pending',
    energy: 30,
  },
  {
    id: 5,
    title: 'Release',
    date: 'May 2024',
    content: 'Final deployment and release.',
    icon: Clock,
    relatedIds: [4],
    status: 'pending',
    energy: 10,
  },
];

export default function EngineeringProcessSection() {
  return (
    <section
      id="process"
      className="section-sm section-background relative overflow-hidden"
    >
      <Container size="lg">
        <SectionTitle
          badge="How I Build"
          title="From Idea to"
          highlight="Production"
          description="Every successful product follows a structured engineering workflow. Tap a node to explore each phase and how it connects to the next."
        />

        {/* Constrain + scale the orbital timeline so it fills the section instead of floating in empty space */}
        <div className="relative w-full flex items-center justify-center mt-2 sm:mt-4">
          <div className="w-full lg:mt-12 xl:mt-25 max-w-5xl aspect-[4/5] sm:aspect-[16/10] scale-100 lg:scale-125 xl:scale-[1.4] transition-transform duration-300 origin-center">
            <RadialOrbitalTimeline timelineData={timelineData} />
          </div>
        </div>
      </Container>
    </section>
  );
}
