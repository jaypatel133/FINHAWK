'use client'
import React from 'react'
import Script from 'next/script'

function chart() {

  const staticHTML = `
  <div class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>
    {
    "width": "100%",
    "height": "510",
    "symbol": "NASDAQ:AAPL",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "light",
    "style": "1",
    "locale": "en",
    "enable_publishing": false,
    "hide_legend": true,
    "save_image": false,
    "support_host": "https://www.tradingview.com"
  }
    </script>
  </div>
  `;
  return (
    <div dangerouslySetInnerHTML={{ __html: staticHTML }} />
  )
}

export default chart
