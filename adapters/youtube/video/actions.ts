
import { VideoDataActions } from './types';

export function getVideoById(id: string): VideoDataActions {

    

  return {
    type: 'GET_VIDEO_BY_ID',
    id,
  };
}