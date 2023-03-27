import { useEffect, useState } from 'react';
//import Test from 'test';
// material-ui
import { Avatar, AvatarGroup, Box, Button, Grid, List, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import IncomeAreaChart from 'sections/dashboard/default/IncomeAreaChart';
//import Calendar from 'sections/forms/calendar';
import ReportAreaChart from 'sections/dashboard/default/ReportAreaChart';
import OrdersTable from 'sections/dashboard/default/OrdersTable';

// assets
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import { FormattedMessage } from 'react-intl';
import { Calendar, ConfigProvider, Radio, Space, theme } from 'antd';
import enUS from 'antd/locale/en_US';
import kmKH from 'antd/locale/km_KH';
import dayjs from 'dayjs';
import 'dayjs/locale/km';

// ==============================|| DASHBOARD - DEFAULT ||============================== //
// test api
import { useDispatch, useSelector } from 'store';
import { getUsers } from 'store/reducers/categories';
//import { getCcy } from 'store/reducers/ccyexchange';
import MyComponent from '../apps/exchangerate';

const DashboardDefault = () => {
  const [slot, setSlot] = useState('week');

  const [data, setData] = useState([]);
  const { users, ccy } = useSelector((state) => state.chat);
  const dispatch = useDispatch([]);

  // ==============================|| CALENDAR ||============================== //
  dayjs.locale('en');
  const Page = () => {
    const { token } = theme.useToken();

    return (
      <Space
        direction="vertical"
        style={{
          borderTop: `1px solid ${token.colorBorder}`
        }}
      >
        <div
          style={{
            border: `1px solid ${token.colorBorder}`
          }}
        >
          <Calendar fullscreen={false} value={dayjs()} />
        </div>
      </Space>
    );
  };

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setData(users, ccy);
  }, [users, ccy]);

  const [locale, setLocal] = useState(enUS);
  const changeLocale = (e) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
    if (!localeValue) {
      dayjs.locale('en');
    } else {
      dayjs.locale('km');
    }
  };

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5" className="homepage">
          <FormattedMessage id="homepage" />
          <div>{data.map((data) => data.nameen + ' ' + data.namekh)}</div>
          <div>{data.map((data) => data.bid)}</div>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={8}>
        <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={4}>
        <MainCard>
          <Stack spacing={2}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Stack>
                  <Typography variant="h5" noWrap>
                    Create New Data Entry
                    {/* <Test /> */}
                  </Typography>
                  <Typography variant="caption" color="secondary" noWrap>
                    Insert Data....
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                  <Avatar alt="Remy Sharp" src={avatar1} />
                  <Avatar alt="Travis Howard" src={avatar2} />
                  <Avatar alt="Cindy Baker" src={avatar3} />
                  <Avatar alt="Agnes Walker" src={avatar4} />
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button href={'/data-input'} size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
              Create
            </Button>
          </Stack>
        </MainCard>
      </Grid>
      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" className="notification">
              <FormattedMessage id="notification" />
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                Month
              </Button>
              <Button
                size="small"
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                Week
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart slot={slot} />
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" className="calendar">
              <FormattedMessage id="calendar" />
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Radio.Group value={locale} onChange={changeLocale}>
                <Radio.Button key="en" value={enUS}>
                  English
                </Radio.Button>
                <Radio.Button key="km" value={kmKH}>
                  ខ្មែរ
                </Radio.Button>
              </Radio.Group>
            </Stack>
          </Grid>
        </Grid>
        <ConfigProvider locale={locale}>
          <MainCard sx={{ mt: 2 }} content={false}>
            <Page />
          </MainCard>
        </ConfigProvider>
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Recent Submit</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">NBC Exchange Rate</Typography>
          </Grid>
          <Grid item />
          <MyComponent />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          <ReportAreaChart />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
