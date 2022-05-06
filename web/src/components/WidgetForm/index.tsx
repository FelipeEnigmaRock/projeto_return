import { ClosedButton } from "../CloseButton";

import bugImageUrl from '../../img/bug.svg';
import ideaImageUrl from '../../img/idea.svg';
import thoughtImageUrl from '../../img/thought.svg';
import { useState } from "react";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de uma minhoca'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-4rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <ClosedButton />
            </header>

            

            <footer className="text-xs">
                Feito por <a className="underline underline-offset-2" href="https://github.com/FelipeEnigmaRock"> Felipe Gomes </a>
            </footer>
        </div>
    )
}