import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Server, 
  Shield, 
  GitBranch,
  MonitorSpeaker,
  Settings
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "CloudFormation", "IAM", "VPC"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Server,
      title: "Infrastructure & Orchestration", 
      skills: ["Kubernetes", "Docker", "Terraform", "Ansible", "Helm", "EKS"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: GitBranch,
      title: "CI/CD & Automation",
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "Azure DevOps", "ArgoCD", "Tekton"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: MonitorSpeaker,
      title: "Monitoring & Observability",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "CloudWatch", "Jaeger"],
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      skills: ["HashiCorp Vault", "SAST/DAST", "RBAC", "Network Security", "Compliance", "Secret Management"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Settings,
      title: "Tools & Technologies",
      skills: ["Linux", "Bash/Python", "Git", "NGINX", "Load Balancers", "Microservices"],
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cloud infrastructure, automation, and DevOps expertise gained through 4.8 years at PwC
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:shadow-glow transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;