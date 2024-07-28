import { IconButton, Typography, styled, Stack } from '@mui/material';
import { cartRemove } from '../../redux/slice/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';

const StyledNavLink = styled(NavLink)(() => ({
  color: 'rgba(40, 40, 40, 1)',
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
  },
}));

const Image = styled('img')(() => ({
  width: '100px',
  height: '100px',
  objectFit: 'cover',
}));

const CartItemMobile = ({ item, updateCount }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const deleteItem = (id) => {
    dispatch(cartRemove(id));
    updateCount();
  };

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
        padding: '5px',
        height: '180px',
        overflow: 'hidden',
        borderRadius: '10px',
        border: '1px solid #e0e0e0',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      <IconButton
        variant="outline-secondary"
        size="sm"
        onClick={() => deleteItem(item.id)}
        sx={{
          position: 'absolute',
          top: '10px',
          right: '5px',
          padding: 0,
          '&:hover': { color: 'rgba(255, 0, 0)' },
        }}
      >
      </IconButton>
      <Image src={`http://localhost:3333/${item.image}`} alt={item.title} />
      <Stack sx={{ gap: '10px', alignItems: 'flex-start', flex: 1 }}>
        <StyledNavLink to={`/products/${item.id}`}>
          <Typography
            sx={{
              lineHeight: '1.2',
              fontWeight: '300',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {item.title}
          </Typography>
        </StyledNavLink>
        <Stack
          sx={{
            flexDirection: isSmallScreen ? 'column' : 'row',
            gap: isSmallScreen ? '5px' : '30px',
            alignItems: 'center',
          }}
        >
          {item.discont_price ? (
            <Stack
              sx={{ flexDirection: 'row', gap: '5px', alignItems: 'center' }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                ${item.discont_price}
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(139, 139, 139, 1)',
                  textDecoration: 'line-through',
                  fontSize: '15spx',
                }}
              >
                ${item.price}
              </Typography>
            </Stack>
          ) : (
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              ${item.price}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
export default CartItemMobile;