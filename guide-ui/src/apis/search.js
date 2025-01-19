// guide-ui/src/components/api.js

export const fetchSearchResults = async (
  searchQuery,
  universities,
  experience,
  category
) => {
  // Simulated API response
  const results = [
    {
      id: 1,
      title: "College Application Success Bundle",
      description:
        "Complete guidance for college applications, essays, and interviews",
      price: "$299",
      image: "/images/college.jpg",
      features: ["Essay Review", "Interview Prep", "Application Strategy"],
      mentors: 3,
      duration: "3 months",
    },
    {
      id: 2,
      title: "STEM Career Guidance Package",
      description: "Expert mentoring and guidance for pursuing STEM careers",
      price: "$249",
      image: "/images/stem.jpg",
      features: [
        "Career Planning",
        "Technical Interview Prep",
        "Resume Review",
      ],
      mentors: 4,
      duration: "2 months",
    },
    {
      id: 3,
      title: "Graduate School Application Bundle",
      description: "Comprehensive support for graduate school applications",
      price: "$349",
      image: "/images/grad.jpg",
      features: [
        "Research Proposal Help",
        "Statement of Purpose Review",
        "Application Strategy",
      ],
      mentors: 3,
      duration: "4 months",
    },
    {
      id: 4,
      title: "MBA Application Package",
      description: "Strategic guidance for business school applications",
      price: "$399",
      image: "/images/mba.jpg",
      features: ["Essay Editing", "Interview Coaching", "Resume Building"],
      mentors: 5,
      duration: "3 months",
    },
  ];

  return {
    searchQuery,
    universities,
    experience,
    category,
    results,
  };
};
