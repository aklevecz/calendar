<svg height="100" width="100">
    <circle class="outer" cx="50" cy="50" r="40" stroke="black" stroke-width="10" fill="transparent" />
    <circle class="inner" cx="50" cy="50" r="20" stroke="white" stroke-width="3" fill="black" />
  </svg>
  
  <style>
    .outer {
      animation: pulseOuter 2s infinite;
      transform-origin: 50% 50%;
    }
    
    .inner {
      animation: pulseInner 1.5s ease-in-out infinite;
      transform-origin: 50% 50%;
    }
    
    @keyframes pulseOuter {
      0%, 100% {
        transform: scale(0.9);
        opacity: 0.9;
        stroke-width: 10px;
      }
      50% {
        transform: scale(1);
        opacity: 1;
        stroke-width: 20px;
      }
    }
    
    @keyframes pulseInner {
      0%, 100% {
        transform: scale(0.5);
        opacity: 0.8;
      }
      50% {
        transform: scale(1.5);
        opacity: 1;
      }
    }
    </style>