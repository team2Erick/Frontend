import React, { useCallback } from 'react';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

const sdk = new ChartsEmbedSDK({
  baseUrl: 'https://charts.mongodb.com/charts-project-0-exnrk',
});

// ___________
const subscribers = sdk.createChart({
  chartId: '022aaf0e-f2dc-4506-aafc-7a54c1abf211',
  autoRefresh: true,
  showAttribution: false,
});
const mostPlayed = sdk.createChart({
  chartId: '427fb3ef-1c47-461d-a725-02891469ad1a',
  autoRefresh: true,
  showAttribution: false,
});
const streamsPerMonth = sdk.createChart({
  chartId: '0b9f7d77-503e-4576-a312-e62592fd1564',
  autoRefresh: true,
  showAttribution: false,
});
const totalStreams = sdk.createChart({
  chartId: 'aaa8aa50-f060-4576-bd84-4c22967bea57',
  autoRefresh: true,
  showAttribution: false,
});
const subscribersPerCountry = sdk.createChart({
  chartId: '36edae1e-ab3b-405f-9600-1bd78871f57f',
  autoRefresh: true,
  showAttribution: false,
});
const topTen = sdk.createChart({
  chartId: 'f9bf0305-b15c-42af-b68d-dd049d9f8b3d',
  autoRefresh: true,
  showAttribution: false,
});

// ___________
export default function charts() {
  const renderSubscribers = useCallback(async (ref) => {
    try {
      await subscribers.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const renderMostPlayed = useCallback(async (ref) => {
    try {
      await mostPlayed.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const renderStreamsPerMonth = useCallback(async (ref) => {
    try {
      await streamsPerMonth.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const renderTotalStreams = useCallback(async (ref) => {
    try {
      await totalStreams.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const renderSubscribersPerCountry = useCallback(async (ref) => {
    try {
      await subscribersPerCountry.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const renderTopTen = useCallback(async (ref) => {
    try {
      await topTen.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  // ___________
  const setRefSubscribers = useCallback(
    (ref) => {
      if (ref) {
        renderSubscribers(ref);
      }
    },
    [renderSubscribers]
  );

  const setRefMostPlayed = useCallback(
    (ref) => {
      if (ref) {
        renderMostPlayed(ref);
      }
    },
    [renderMostPlayed]
  );

  const setRefStreamsPerMonth = useCallback(
    (ref) => {
      if (ref) {
        renderStreamsPerMonth(ref);
      }
    },
    [renderStreamsPerMonth]
  );

  const setRefTotalStreams = useCallback(
    (ref) => {
      if (ref) {
        renderTotalStreams(ref);
      }
    },
    [renderTotalStreams]
  );

  const setRefSubscribersPerCountry = useCallback(
    (ref) => {
      if (ref) {
        renderSubscribersPerCountry(ref);
      }
    },
    [renderSubscribersPerCountry]
  );

  const setRefTopTen = useCallback(
    (ref) => {
      if (ref) {
        renderTopTen(ref);
      }
    },
    [renderTopTen]
  );
  // ___________
  return (
    <>
      <header className="header">
        <h1>CDay Music Stadistics</h1>
      </header>

      <div className="actions">
        <div className="slider"></div>
      </div>

      <div className="charts">
        <div className="chart_1" ref={setRefSubscribers}>
          1
        </div>
        <div className="chart_2" ref={setRefMostPlayed}>
          2
        </div>
        <div className="chart_3" ref={setRefStreamsPerMonth}>
          3
        </div>
        <div className="chart_4" ref={setRefTotalStreams}>
          4
        </div>
        <div className="chart_5" ref={setRefSubscribersPerCountry}>
          5
        </div>
        <div className="chart_6" ref={setRefTopTen}>
          6
        </div>
      </div>
    </>
  );
}
