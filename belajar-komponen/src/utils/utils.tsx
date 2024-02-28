// export function getImageUrl(imageId: string, size = 's') {
//     return (
//       'https://i.imgur.com/' +
//       imageId +
//       size +
//       '.jpg'
//     );
//   }

export function getImageUrlV2(person: { name: string; imageId: string; }, size: number) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }