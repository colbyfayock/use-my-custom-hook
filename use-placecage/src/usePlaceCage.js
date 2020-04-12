const PLACECAGE_HOST = 'https://www.placecage.com/';
const TYPES = {
  calm: null,
  gray: 'g',
  crazy: 'c',
  gif: 'gif'
};
const DEFAULT_TYPE = 'calm';
const ERROR_BASE = 'Failed to place Nick';

export default function usePlaceCage (settings = {}) {
  return generateCage(settings);
}

/**
 * generateCage
 * @param {object} settings - Configuration for image service
 */

function generateCage(settings) {
  const { type = DEFAULT_TYPE, width = 200, height = 200, count = 1 } = settings;
  const config = [];
  if ( type !== DEFAULT_TYPE && TYPES[type] ) {
    config.push(TYPES[type]);
  }
  config.push(width, height);
  if ( isNaN(count) ) {
    throw new Error(`${ERROR_BASE}: Invalid count ${count}`);
  }
  return [...new Array(count)].map(() => `${PLACECAGE_HOST}${config.join('/')}`);
}