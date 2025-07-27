import { v4 as uuidv4 } from "uuid"
const credits = [
  {
    id: uuidv4(),
    creditname: "Django Fullstack Development",
    creditimg: "assets/credits/django.jpg",
    creditlink: "https://www.udemy.com/certificate/UC-a2039112-fc55-409d-8523-41b5e2dd06c7/"
  },
  {
    id: uuidv4(),
    creditname: "Fullstack Development (Infosys)",
    creditimg: "assets/credits/fullstack_infosys.png",
    creditlink: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0130944255397642242299_shared/1-236bb15c-e34d-4141-9311-f63526c66fad.pdf"
  },
  {
    id: uuidv4(),
    creditname: "Fullstack Development (Simplilearn)",
    creditimg: "assets/credits/fullstackskillup.png",
    creditlink:"https://www.linkedin.com/posts/kishore-kevin-a5a873290_fullstack-development-certification-activity-7106961152227565570--Vme"
  },
  {
    id: uuidv4(),
    creditname: "Linux Servers (Cisco Netacad)",
    creditimg: "assets/credits/linuxndg.png",
    creditlink:"assets/credits/linux-cisco.pdf"
  },

  {
    id: uuidv4(),
    creditname: "Git and Github",
    creditimg: "assets/credits/gitcert.png",
    creditlink: "https://www.udemy.com/certificate/UC-f6fe9d5d-9bf8-45ac-af99-9c8a3f6fdcb9/"
  },
  {
    id: uuidv4(),
    creditname: "Docker and Docker composer",
    creditimg: "assets/credits/docker.png",
    creditlink: "https://www.udemy.com/certificate/UC-3c736964-f8bf-4ca0-865e-f5e9c8d85e1d/"
  },
  {
    id: uuidv4(),
    creditname: "Bash and shell scripting",
    creditimg: "assets/credits/bashscript.png",
    creditlink: "https://www.udemy.com/certificate/UC-25de225d-ba47-4674-b235-324d49e4dd58/"
  },
  {
    id: uuidv4(),
    creditname: "React JS",
    creditimg: "assets/credits/reactcert.png",
    creditlink: "https://www.udemy.com/certificate/UC-a6df2d9b-8b99-492c-a2f1-502921818bf6/"
  },
  {
    id: uuidv4(),
    creditname: "Tailwind CSS",
    creditimg: "assets/credits/tailwindcss.png",
    creditlink: "https://www.udemy.com/certificate/UC-957e1936-753f-488a-a9bd-57dc5bdd66f6/"
  },
  {
    id:uuidv4(),
    creditname:"Networking Basics",
    creditimg:"assets/credits/network-basics-cert.png",
    creditlink:"https://www.credly.com/users/kishore-kevin"
  },
  {
    id:uuidv4(),
    creditname:"AWS Simulearn (Cloud First Steps)",
    creditimg:"assets/credits/aws-simulearn-1.png",
    creditlink:"https://www.linkedin.com/posts/kishore-kevin-a5a873290_aws-cloudcomputing-ec2-activity-7350409429856530434-t4HF"
  },
  {
    id:uuidv4(),
    creditname:"AWS Simulearn (Cloud Computing Essentials)",
    creditimg:"assets/credits/aws-simulearn-2.png",
    creditlink:"https://www.linkedin.com/posts/kishore-kevin-a5a873290_awscertified-cloudcomputing-awstraining-activity-7349738635056828416-FxPX"
  },
  {
    id:uuidv4(),
    creditname:"AWS Simulearn (Computing Solutions)",
    creditimg:"assets/credits/aws-simulearn-3.png",
    creditlink:"https://www.linkedin.com/posts/kishore-kevin-a5a873290_awscertified-cloudcomputing-ec2-activity-7350730766043017216-syTc"
  },
  {
    id:uuidv4(),
    creditname:"AWS Simulearn (First NoSQL Database)",
    creditimg:"assets/credits/aws-simulearn-4.png",
    creditlink:"https://www.linkedin.com/posts/kishore-kevin-a5a873290_aws-dynamodb-nosql-activity-7351122142656155648-Gp_a"
  },
  {
    id:uuidv4(),
    creditname:"AWS Simulearn (Networking Concepts)",
    creditimg:"assets/credits/aws-simulearn-5.png",
    creditlink:"https://www.linkedin.com/posts/kishore-kevin-a5a873290_awscertified-cloudcomputing-networking-activity-7351472095014416386-3EnI"
  },
  {
    id:uuidv4(),
    creditname:"AWS Simulearn (Cloud Economics)",
    creditimg:"assets/credits/aws-simulearn-6.png",
    creditlink:"https://www.linkedin.com/posts/kishore-kevin-a5a873290_awscertification-cloudcomputing-cloudeconomics-activity-7352305036871286784-s6NK"
  },
  {
    id:uuidv4(),
    creditname:"AWS Simulearn (File Systems in the Cloud)",
    creditimg:"assets/credits/aws-simulearn-7.png",
    creditlink:"https://www.linkedin.com/posts/kishore-kevin-a5a873290_awstraining-cloudcomputing-efs-activity-7352689707077521409-Cksb"
  },
  {
    id:uuidv4(),
    creditname:"AWS Simulearn (Databases in Practice)",
    creditimg:"assets/credits/aws-simulearn-8.png",
    creditlink:"https://www.linkedin.com/posts/kishore-kevin-a5a873290_aws-cloudcomputing-amazonrds-activity-7353027606964813824-Vkc6"
  },
  {
    id:uuidv4(),
    creditname:"AWS Simulearn (Core Security Concepts)",
    creditimg:"assets/credits/aws-simulearn-9.png",
    creditlink:"https://www.linkedin.com/posts/kishore-kevin-a5a873290_awscertified-cloudsecurity-iam-activity-7353371347315544068-RXIm"
  },
  {
    id:uuidv4(),
    creditname:"AWS Simulearn (Auto-Healing and Scaling Applications)",
    creditimg:"assets/credits/aws-simulearn-10.png",
    creditlink:"https://www.linkedin.com/posts/kishore-kevin-a5a873290_aws-cloudcomputing-autoscaling-activity-7354142551282499604-DxbR"
  },
{
    id:uuidv4(),
    creditname:"AWS Simulearn (Highly Available Web Applications)",
    creditimg:"assets/credits/aws-simulearn-11.png",
    creditlink:"https://www.linkedin.com/posts/kishore-kevin-a5a873290_awscertified-cloudcomputing-highavailability-activity-7355268610853933057-A6Ak"
  },
]

const badges = [
  {
    id: uuidv4(),
    creditname: "Cloud 101",
    creditimg: "assets/credits/aws-educate-getting-started-with-cloud-ops.png",
    creditlink: "https://www.credly.com/users/kishore-kevin"
  },
  {
    id: uuidv4(),
    creditname: "S3 Storage",
    creditimg: "assets/credits/aws-educate-getting-started-with-storage.png",
    creditlink: "https://www.credly.com/users/kishore-kevin"
  },
  {
    id: uuidv4(),
    creditname: "EC2 Compute",
    creditimg: "assets/credits/aws-educate-getting-started-with-compute.png",
    creditlink: "https://www.credly.com/users/kishore-kevin"
  },
  {
    id: uuidv4(),
    creditname: "RDS Database",
    creditimg: "assets/credits/aws-educate-getting-started-with-databases.png",
    creditlink: "https://www.credly.com/users/kishore-kevin"
  },
  {
    id: uuidv4(),
    creditname: "VPC Networking",
    creditimg: "assets/credits/aws-educate-getting-started-with-networking.png",
    creditlink: "https://www.credly.com/users/kishore-kevin"
  },
  {
    id: uuidv4(),
    creditname: "Cloud Operations",
    creditimg: "assets/credits/aws-educate-getting-started-with-cloud-ops.png",
    creditlink: "https://www.credly.com/users/kishore-kevin"
  },
  {
    id: uuidv4(),
    creditname: "Serverless Functions",
    creditimg: "assets/credits/aws-educate-getting-started-with-serverless.png",
    creditlink: "https://www.credly.com/users/kishore-kevin"
  },
  {
    id:uuidv4(),
    creditname:"Networking Basics",
    creditimg:"assets/credits/networking-basics.png",
    creditlink:"https://www.credly.com/users/kishore-kevin"
  }
]

export { credits, badges }
