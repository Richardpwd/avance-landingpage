# Avance: Your Child's Success

Acompanhamento escolar multidisciplinar

Seu filho merece este apoio!

Infantil ao 9º ano

Matrículas 2027  . Preciso de landing page para o apoio escolar avance, fazendo propaganda das matriculas 2027. A Avance Apoio Escolar, localizada no bairro Venâncio em Crateús, é um espaço dedicado ao desenvolvimento integral de crianças, adolescentes e jovens. O foco principal é oferecer um acompanhamento individualizado que une reforço escolar e suporte emocional, ajudando alunos a recuperarem a confiança e organizarem sua rotina de estudos.

O atendimento é personalizado, respeitando o ritmo e a história de cada estudante. A metodologia visa transformar dificuldades escolares em conquistas reais, trabalhando não apenas o conteúdo acadêmico, mas também a autoestima e a motivação. É um ambiente acolhedor onde o aluno se sente seguro para aprender, sem a pressão de competir com o ritmo da turma tradicional.

Entre os serviços oferecidos, destacam-se:

Reforço individualizado: Aulas focadas nas dificuldades reais do aluno.

Apoio multidisciplinar: Integração de estratégias pedagógicas com cuidado psicológico.

Organização de rotina: Orientação para melhorar a gestão do tempo e dos estudos.

Preparação para avaliações: Suporte específico para provas, vestibulinhos e ENEM.

A instituição busca proporcionar tranquilidade aos pais, que ganham clareza sobre o progresso de seus filhos. A Avance entende que o aprendizado vai além da sala de aula, promovendo habilidades sociais e emocionais essenciais para o futuro. Ao unificar educação e bem-estar, o espaço se torna um aliado fundamental para famílias que desejam ver seus filhos avançarem com segurança e autonomia.   adicione esse efeito de uma forma que combine com o site: You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
background-paths.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        


            
                
                {paths.map((path) => (
                    
                ))}
            
        


    );
}

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        


            


                
                
            



            


                
                    


                        {words.map((word, wordIndex) => (
                            
                                {word.split("").map((letter, letterIndex) => (
                                    
                                        {letter}
                                    
                                ))}
                            
                        ))}
                    



                    


                        
                            
                                Discover Excellence
                            
                            
                                →
                            
                        
                    


                
            


        


    );
}


demo.tsx
import { BackgroundPaths } from "@/components/ui/background-paths"


export function DemoBackgroundPaths() {
    return <BackgroundPaths title="Background Paths" />
}
```

Copy-paste these files for dependencies:
```tsx
shadcn/button
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

Install NPM dependencies:
```bash
framer-motion, @radix-ui/react-slot, class-variance-authority
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6586983c-bb19-4836-a978-85202be698d4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
