export default function HeroSection() {
    return (
        <Section className="w-full pt-36 md:pt-48 pb-10">
            <div>
                <div>
                    <h1>
                        Your AI Career Coach for
                        <br />
                        Professional Success
                    </h1>
                    <p>
                        Advanced your career with professionalguidance, interview prep, and
                        Ai-powered toos forjob success
                    </p>
                </div>
                <div>
                    <Link href="dashboard">
                        <Button size="lg" className="px-8">Get Started</Button>
                    </Link>
                    <Link href="dashboard">
                        <Button size="lg" className="px-8">Get Started</Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
};
