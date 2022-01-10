import React from 'react'
import "./SwipeButtons.css"
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon />
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseIcon />
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon />
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavoriteIcon />
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon />
            </IconButton>
        </div>
    )
}

export default SwipeButtons;