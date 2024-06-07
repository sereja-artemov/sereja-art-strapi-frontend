import getWordEnding from './getWordEnding';

export default function getReadingTime(
  content: string,
  wordsPerMinute: number = 200
) {
  const wordsArr = content.split(/\s/g).filter((n) => n);
  const wordsQuantity = wordsArr.length;
  const minutes = wordsQuantity / wordsPerMinute;
  const readingTime = Math.ceil(minutes) + ' минут';

  const readingTimeMinutes = readingTime.match(/\d+/g);
  const word = getWordEnding(Number(readingTimeMinutes), [
    ' минута',
    ' минуты',
    ' минут',
  ]);
  const readingTimeText = readingTime.replace(/[^0-9\.]+/g, word);
  const wordsQuantityStr =
    wordsQuantity + getWordEnding(wordsQuantity, [' слово', ' слова', ' слов']);

  return { readingTimeText, wordsQuantityStr };
}
