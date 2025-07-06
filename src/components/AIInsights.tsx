import React, { useRef, useEffect, useState } from 'react';
import { Briefcase, Award, Users, Lightbulb, Zap, Star } from 'lucide-react';

export const AIInsights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      icon: <div className="w-8 h-8 overflow-hidden rounded-full"><img src="/3.png" alt="Users Icon" className="w-full h-full scale-x-[1.25] object-cover" /></div>,
      title: 'Stage - DATA ANALYST | FULL-STACK DEVELOPER',
      company: 'Payskills',
      duration: 'Avril 2025 – Present',
      description: (
        <>
          <strong> * Projets :</strong><br />
          - Développement d’une solution web et cloud pour l’automatisation de la gestion de la paie et du personnel, intégrant un modèle de Deep Learning.<br /><br />
          <strong>* Tâches réalisées :</strong><br />
          - Conception et développement d’applications web full stack.<br />
          - Intégration de services cloud pour le déploiement de la solution.<br />
          - Développement d’un modèle de Deep Learning pour la détection et la correction automatique des erreurs de paie.<br /><br />
          <strong>* Valeur apportée :</strong><br />
          - Réduction significative des erreurs de traitement de la paie.<br />
          - Automatisation des processus RH, améliorant l’efficacité opérationnelle.<br />
          - Mise en place d’un système intelligent et évolutif.
        </>
      ),
      bgColor: 'bg-yellow-400',
      borderColor: 'border-black',
      textColor: 'text-black',
    },
    {
      icon: <img src="/CFAO.png" alt="Lightbulb Icon" className="w-8 h-8 scale-x-100" />,
      title: 'Stage - ANALYSTE PROGRAMMEUR | DEVELOPPEUR PROJETS',
      company: 'CFAO MOBILITY',
      duration: 'Mars 2024 – Octobre 2024',
      description: (
        <>
          <strong>* Projets :</strong><br />
          - Supervision de projets logiciels orientés Business Intelligence.<br />
          - Analyse des données issues du CRM propriétaire.<br /><br />
          - Développement, tests unitaires.<br /><br />

          <strong>* Tâches réalisées :</strong><br />
          - Encadrement d’une équipe d’analystes programmeurs.<br />
          - Supervision de projets de développement logiciel et du processus de tests utilsateurs (25 employés).<br />
          - Création de tableaux de bord orientés BI.<br />
          - Analyse des données CRM pour en extraire des indicateurs clés.<br />
          - Formation des équipes internes aux outils et méthodes.<br /><br />

          <strong>* Valeur apportée :</strong><br />
          - Amélioration de la prise de décision grâce à des tableaux de bord dynamiques.<br />
          - Renforcement des compétences internes via la formation.<br />
          - Livraison de solutions logicielles alignées sur les objectifs métiers.
        </>
      ),
      bgColor: 'bg-pink-500',
      borderColor: 'border-white',
      textColor: 'text-white',
    },
    {
      icon: <img src="/Fichier 1.png" alt="Lightbulb Icon" className="w-8 h-8" />,
      title: 'Stage - Développeur full-stack | AI LEAD',
      company: 'UBIPHARM',
      duration: 'Mars 2023 – Juillet 2023',
      description: (
        <>
          <strong>* Projets :</strong><br />
          - Développement d’outils logiciels pour la direction commerciale et les relations clients.<br />
          - Suivi des indicateurs de performance et visualisation des données.<br /><br />

          <strong>* Tâches réalisées :</strong><br />
          - Développement de solutions logicielles internes pour les équipes commerciales.<br />
          - Support technique à la direction IT et à la direction d’exploitation.<br />
          - Mise en place de pipelines ETL et de tableaux de bord pour le suivi des KPI.<br /><br />

          <strong>* Valeur apportée :</strong><br />
          - Optimisation des opérations commerciales grâce à des outils sur mesure.<br />
          - Amélioration de la visibilité sur les performances via des visualisations claires.<br />
          - Soutien stratégique à la prise de décision basée sur les données.
        </>
      ),
      bgColor: 'bg-cyan-400',
      borderColor: 'border-black',
      textColor: 'text-black',
    },
    {
      icon: <img src="/Logo@2x.png" alt="Lightbulb Icon" className="w-8 h-8" />,
      title: 'Freelance - UI/UX DESIGNER',
      company: 'Beelieve',
      duration: '2021 – 2022',
      description: (
        <>
          <strong>* Projets :</strong><br />
          - Développement d’outils logiciels pour la direction commerciale et les relations clients.<br />
          - Suivi des indicateurs de performance et visualisation des données.<br /><br />

          <strong>* Tâches réalisées :</strong><br />
          - Développement de solutions logicielles internes pour les équipes commerciales.<br />
          - Support technique à la direction IT et à la direction d’exploitation.<br />
          - Mise en place de pipelines ETL et de tableaux de bord pour le suivi des KPI.<br /><br />

          <strong>* Valeur apportée :</strong><br />
          - Optimisation des opérations commerciales grâce à des outils sur mesure.<br />
          - Amélioration de la visibilité sur les performances via des visualisations claires.<br />
          - Soutien stratégique à la prise de décision basée sur les données.
        </>
      ),
      bgColor: 'bg-lime-400',
      borderColor: 'border-black',
      textColor: 'text-black',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ai-insights" className="py-24 px-6 relative" ref={sectionRef}>
      {/* Brutalist Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 right-32 w-16 h-40 bg-yellow-400 rotate-12 opacity-50" />
        <div className="absolute bottom-40 left-20 w-28 h-8 bg-pink-500 skew-x-12 opacity-60" />
        <Zap className="absolute top-1/3 left-1/4 w-12 h-12 text-cyan-400 opacity-40 animate-bounce" />
        <Star className="absolute bottom-1/4 right-1/4 w-10 h-10 text-lime-400 opacity-50 animate-spin" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 sm:mb-8 brutalist-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent uppercase tracking-tighter">
            EXPÉRIENCES PROFESSIONNELLES
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 font-bold max-w-4xl mx-auto">
            <span className="text-yellow-400 font-black">IMPACT RÉEL</span> grâce à un développement pratique, à la recherche et au leadership.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Central vertical line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-black h-full opacity-80"></div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative w-full md:w-1/2 p-6 border-4 transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:-translate-y-4 group cursor-pointer
                ${exp.borderColor} ${exp.bgColor} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                ${isLeft ? 'md:ml-0 md:mr-auto text-left' : 'md:ml-auto md:mr-0 text-left md:text-right'}
              `}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: '8px 8px 0px rgba(0,0,0,0.8)',
                }}
              >
                {/* Dotted vertical line behind icon */}
                <div
                  className="absolute top-0 bottom-0 w-px border-l-4 border-dotted border-white opacity-60"
                  style={{
                    [isLeft ? 'right' : 'left']: '-32px',
                    zIndex: 0,
                  }}
                ></div>

                {/* Icon circle */}
                <div
                  className={`absolute top-6 w-16 h-16 rounded-full border-2 border-black flex items-center justify-center group-hover:rotate-12 group-hover:animate-bounce transition-transform duration-300 ${exp.bgColor}`}
                  style={{
                    [isLeft ? 'right' : 'left']: '-48px',
                    zIndex: 10,
                  }}
                >
                  <div className={`${exp.textColor === 'text-black' ? 'bg-white' : 'bg-black'} p-3 rounded-full`}>
                    {exp.icon}
                  </div>
                </div>

                <h3 className={`text-xl md:text-2xl font-black ${exp.textColor} mb-1 uppercase`}>
                  {exp.title}
                </h3>
                <p className={`${exp.textColor} font-bold text-sm uppercase tracking-wide`}>
                  {exp.company}
                </p>
                <p className={`${exp.textColor} text-xs font-semibold uppercase tracking-wider mb-2`}>
                  {exp.duration}
                </p>
                <p className={`${exp.textColor} text-sm font-medium`}>
                  {exp.description}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className={`p-6 sm:p-8 border-4 border-white bg-black transition-all duration-500 transform hover:scale-[1.02] hover:rotate-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{
            transitionDelay: '600ms',
            boxShadow: '12px 12px 0px rgba(255,255,255,0.3)',
          }}
        >
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 sm:mb-8 flex items-center uppercase tracking-wide">
            <div className="p-2 bg-yellow-400 border-2 border-white mr-3 sm:mr-4 animate-pulse">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </div>
            KEY PROJECT HIGHLIGHTS
          </h3>
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                color: 'bg-yellow-400',
                title: 'Built a custom recommendation engine',
                description: 'Deployed on Azure, improved engagement by 22%',
              },
              {
                color: 'bg-cyan-400',
                title: 'Real-time NLP summarization system',
                description: 'Used T5 and FastAPI for fast document processing',
              },
              {
                color: 'bg-pink-500',
                title: 'AI-driven SEO optimizer',
                description: 'Helped boost organic impressions by 40%',
              },
            ].map((proj, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 sm:space-x-6 p-3 sm:p-4 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-[1.02] hover:rotate-1 group ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <div className={`w-4 h-4 ${proj.color} border-2 border-white mt-1 flex-shrink-0 animate-pulse group-hover:rotate-45 transition-transform duration-300`} />
                <div>
                  <p className="text-white font-black text-base sm:text-lg uppercase tracking-wide group-hover:text-black transition-colors duration-300">
                    {proj.title}
                  </p>
                  <p className="text-gray-300 font-bold text-xs sm:text-sm uppercase tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                    {proj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
