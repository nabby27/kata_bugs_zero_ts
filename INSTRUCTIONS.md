Beware that this list spoils part of the fun :)

- A Game could have less than two players - How could we make sure it always has at least two. Is this a runtime check or can this be enforced "statically"? \*\* What can be done in a language like javascript?

- Someone could try to create a game with 7 players, make sure that's impossible. \*\* or slightly easier, allow for 7 players or more

- Existing BUG: A player that gets into prison always stays there. \*\* Other than just fixing the bug, try to understand what's wrong with the design and fix the root cause

- Existing BUG: coins are added to the wrong player. Try to understand what made this bug likely and fix the design so that it becomes very unlikely.

- Introducing new categories of questions seems like tricky business. There are business rules: categories are evenly distributed on the board, there are an equal amount of each category. \*\* Could you make sure all places have the "right" question and that the distribution is always correct (i.e. same number of each category, distance always the same between categories)?

- The deck could run out of questions \*\* Make sure that can't happen (a deck with 1 billion questions is cheating :)

- Similarly changing the board size greatly affects the questions distribution. i.e. how do we ensure that there are as many of each category and that they repeat in a cyclic way? \*\* Is there a design where it is guaranteed that the question category distribution stays the same

---

Tenga en cuenta que esta lista estropea parte de la diversión :)

- Un juego puede tener menos de dos jugadores. ¿Cómo podemos asegurarnos de que siempre tenga al menos dos? ¿Se trata de una comprobación de tiempo de ejecución o se puede aplicar "estáticamente"? \*\* ¿Qué se puede hacer en un lenguaje como javascript?

- Alguien podría intentar crear un juego con 7 jugadores, asegúrese de que sea imposible. \*\* o un poco más fácil, permite 7 jugadores o más

- ERROR existente: un jugador que entra en prisión siempre permanece allí. \*\* Además de corregir el error, intente comprender qué está mal con el diseño y corrija la causa raíz.

- ERROR existente: las monedas se agregan al jugador equivocado. Intente comprender qué hizo que este error fuera probable y corrija el diseño para que sea muy poco probable.

- La introducción de nuevas categorías de preguntas parece un asunto complicado. Hay reglas comerciales: las categorías se distribuyen uniformemente en el tablero, hay una cantidad igual de cada categoría. \*\* ¿Podría asegurarse de que todos los lugares tengan la pregunta "correcta" y que la distribución sea siempre correcta (es decir, el mismo número de cada categoría, la distancia siempre es la misma entre las categorías)?

- El mazo podría quedarse sin preguntas \*\* Asegúrate de que eso no suceda (un mazo con mil millones de preguntas es trampa :)

- De manera similar, cambiar el tamaño del tablero afecta en gran medida la distribución de las preguntas. es decir, ¿cómo nos aseguramos de que haya tantos de cada categoría y que se repitan de forma cíclica? \*\* ¿Existe un diseño en el que se garantice que la distribución de la categoría de preguntas se mantiene igual?
