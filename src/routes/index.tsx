import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  HeartHandshake,
  CalendarCheck,
  GraduationCap,
  ArrowRight,
  MapPin,
  Sparkles,
  Users,
  ShieldCheck,
} from "lucide-react";
const logo = { url: "/avance-logo.jpeg" };
const fachada = { url: "/avance-fachada.jpeg" };
const criancas = { url: "/avance-criancas.jpeg" };
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avance Apoio Escolar — Matrículas 2027 | Crateús" },
      {
        name: "description",
        content:
          "Acompanhamento escolar multidisciplinar do Infantil ao 9º ano em Crateús. Reforço individualizado, apoio emocional e preparação para avaliações. Matrículas 2027 abertas!",
      },
      { property: "og:title", content: "Avance Apoio Escolar — Matrículas 2027" },
      {
        property: "og:description",
        content:
          "Reforço escolar e suporte emocional para seu filho avançar com confiança. Do Infantil ao 9º ano, no bairro Venâncio, Crateús.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: BookOpenCheck,
    title: "Reforço individualizado",
    description:
      "Aulas focadas nas dificuldades reais do aluno, no ritmo dele, sem pressão da turma tradicional.",
  },
  {
    icon: HeartHandshake,
    title: "Apoio multidisciplinar",
    description:
      "Integração de estratégias pedagógicas com cuidado psicológico para desenvolver autoestima e motivação.",
  },
  {
    icon: CalendarCheck,
    title: "Organização de rotina",
    description:
      "Orientação prática para melhorar a gestão do tempo e criar uma rotina de estudos consistente.",
  },
  {
    icon: GraduationCap,
    title: "Preparação para avaliações",
    description:
      "Suporte específico para provas, vestibulinhos e ENEM, com estratégia e confiança.",
  },
];

const differentials = [
  {
    icon: Users,
    title: "Atendimento personalizado",
    text: "Respeitamos o ritmo e a história de cada estudante, transformando dificuldades em conquistas reais.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente acolhedor",
    text: "Um espaço seguro para aprender, sem a pressão de competir com o ritmo da turma tradicional.",
  },
  {
    icon: Sparkles,
    title: "Além da sala de aula",
    text: "Desenvolvemos habilidades sociais e emocionais essenciais para o futuro do seu filho.",
  },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  };
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Logo Avance Apoio Escolar"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-base font-bold tracking-tight sm:text-lg">
              Avance{" "}
              <span className="hidden text-secondary sm:inline">
                Apoio Escolar
              </span>
            </span>
          </div>
          <Button variant="secondary" size="sm" asChild>
            <a href="#matriculas">Matrículas 2027</a>
          </Button>
        </div>
      </header>

      {/* Hero com efeito Background Paths */}
      <BackgroundPaths className="bg-background pt-16">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
          <img
            src={logo.url}
            alt="Avance Apoio Escolar"
            className="animate-hero-scale mx-auto mb-8 h-28 w-28 rounded-2xl object-cover shadow-2xl shadow-primary/20 sm:h-36 sm:w-36"
          />
          <div className="animate-hero-fade" style={{ animationDelay: "0.15s" }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
              <Sparkles className="h-4 w-4" />
              Matrículas 2027 abertas
            </span>
          </div>
          <h1
            className="animate-hero-fade mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl"
            style={{ animationDelay: "0.3s" }}
          >
            Acompanhamento escolar{" "}
            <span className="text-primary">multidisciplinar</span>
            <br />
            <span className="text-secondary">Seu filho merece este apoio!</span>
          </h1>
          <p
            className="animate-hero-fade mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            style={{ animationDelay: "0.45s" }}
          >
            Do Infantil ao 9º ano — reforço escolar e suporte emocional para que
            cada aluno recupere a confiança, organize sua rotina e avance com
            segurança e autonomia.
          </p>
          <div
            className="animate-hero-fade mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="secondary" size="lg" asChild>
              <a href="#matriculas">
                Garanta a vaga do seu filho
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#servicos">Conheça nossos serviços</a>
            </Button>
          </div>
        </div>
      </BackgroundPaths>

      {/* Sobre */}
      <section className="border-t border-border bg-card/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeUp()} className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Um espaço dedicado ao{" "}
              <span className="text-primary">desenvolvimento integral</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A Avance Apoio Escolar, localizada no bairro Venâncio em Crateús,
              une reforço escolar e suporte emocional em um acompanhamento
              individualizado. Nossa metodologia transforma dificuldades
              escolares em conquistas reais, trabalhando não apenas o conteúdo
              acadêmico, mas também a autoestima e a motivação de cada aluno.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {differentials.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(0.1 * (i + 1))}
                className="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso espaço */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeUp()} className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-secondary">
              Nosso espaço
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Um ambiente acolhedor para aprender
            </h2>
            <p className="mt-4 text-muted-foreground">
              Estrutura pensada para o conforto e desenvolvimento dos alunos, com salas equipadas e equipe preparada.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <motion.div {...fadeUp(0.1)} className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-black/20">
              <img
                src={fachada.url}
                alt="Fachada da Avance Apoio Escolar no bairro Venâncio, Crateús"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-medium text-foreground">Fachada da Avance</p>
                <p className="text-xs text-muted-foreground">Bairro Venâncio, Crateús — CE</p>
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-black/20">
              <img
                src={criancas.url}
                alt="Crianças em atividade educativa na Avance Apoio Escolar"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-medium text-foreground">Aprendizado na prática</p>
                <p className="text-xs text-muted-foreground">Atividades lúdicas e reforço escolar</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeUp()} className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-secondary">
              Nossos serviços
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Apoio completo para cada etapa
            </h2>
          </motion.div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                {...fadeUp(0.08 * (i + 1))}
                className="group flex gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary transition-colors group-hover:bg-secondary/25">
                  <service.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Para os pais */}
      <section className="border-t border-border bg-card/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div {...fadeUp()}>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                Tranquilidade para os pais
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Clareza sobre o progresso do seu filho
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Ao unificar educação e bem-estar, a Avance se torna uma aliada
                fundamental das famílias. Você acompanha de perto cada conquista
                e ganha a certeza de que seu filho está avançando com segurança
                e autonomia.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.15)} className="grid gap-4">
              {[
                "Acompanhamento individualizado do Infantil ao 9º ano",
                "Comunicação transparente sobre o progresso",
                "Suporte emocional integrado ao aprendizado",
                "Preparação para provas, vestibulinhos e ENEM",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <ShieldCheck className="h-5 w-5 shrink-0 text-secondary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Matrículas */}
      <section id="matriculas" className="relative overflow-hidden border-t border-border py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div {...fadeUp()}>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              Matrículas <span className="text-secondary">2027</span> abertas!
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Garanta já a vaga do seu filho na Avance Apoio Escolar. Vagas
              limitadas para o Infantil ao 9º ano — venha nos conhecer no bairro
              Venâncio, em Crateús.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="secondary" size="lg" asChild>
                <a
                  href="https://wa.me/5588994862905?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Avance%20Apoio%20Escolar%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20Matr%C3%ADculas%202027.%0A%0AMeu%20nome%3A%20%0ANome%20do%20aluno%3A%20%0AS%C3%A9rie/ano%20que%20vai%20cursar%3A%20%0AIdade%20do%20aluno%3A%20%0AMelhor%20hor%C3%A1rio%20para%20contato%3A%20%0A%0AAguardo%20retorno.%20Obrigado%21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Bairro Venâncio — Crateús, CE
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Logo Avance Apoio Escolar"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="font-semibold">
              Avance <span className="text-secondary">Apoio Escolar</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Educação e bem-estar caminhando juntos. Bairro Venâncio, Crateús —
            CE.
          </p>
          <p className="text-xs text-muted-foreground/60">
            © 2026 Avance Apoio Escolar. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
