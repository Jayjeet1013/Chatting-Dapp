import { useContext, useEffect, useState } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import ProfileImageMinter from './mintingModal/ProfileImageMinter'
import { customStyles } from '../../lib/constants'


export interface FfmpegProfile {
	width: number;
	name: string;
	height: number;
	bitrate: number;
	fps: number;
	fpsDen?: number;
	gop?: string;
	profile?: 'H264Baseline' | 'H264Main' | 'H264High' | 'H264ConstrainedHigh';
	encoder?: 'h264' | 'hevc' | 'vp8' | 'vp9';
}


	
	stream_id?: string;
	
 Playback ID.
	 
	playback_id?: string;
	
	 
	unique_client_ips: number;
	
	total_filesize?: number;
	
